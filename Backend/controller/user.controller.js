import user from "../models/user.model.js";
import * as crypto from "crypto";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { nama, email, password, perusahaan } = req.body;
  if (!nama || !email || !password || !perusahaan)
    return res.status(401).json({
      status: 401,
      message: "Pastikan Semua Data Terisi",
    });
  const id = crypto.randomUUID();
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const existUser = await user.findOne({
    where: {
      email: email,
    },
  });
  if (existUser)
    return res.status(401).json({
      status: 401,
      message: "Email sudah digunakan",
    });
  try {
    await user.create({
      id: id,
      nama: nama,
      email: email,
      password: hashedPassword,
      perusahaan: perusahaan,
    });
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendaftar",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      Detail: error.message,
    });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(401).json({
      status: 401,
      message: "Harap Mengisi Email dan Password",
    });
  const users = await user.findOne({ where: { email: email } });
  try {
    if (!users)
      return res
        .status(401)
        .json({ status: 401, message: "Email Tidak Ditemukan" });
    const matchPass = await bcrypt.compare(password, users.password);
    if (!matchPass)
      return res.status(401).json({
        status: 400,
        message: "Password Salah",
      });

    const token = jwt.sign(
      {
        userId: users.id,
      },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json({
      status: 200,
      message: "Login Berhasil",
      token: token,
    });
  } catch (error) {
    return res.send(500).json({
      status: 500,
      message: "Internal Server Error",
      detail: error.message,
    });
  }
};

export { register, login };
