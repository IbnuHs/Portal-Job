import user from "../models/user.model.js";
import * as crypto from "crypto";
import * as bcrypt from "bcrypt";

const register = async (req, res) => {
  const { nama, email, password, perusahaan } = req.body;
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

export { register };
