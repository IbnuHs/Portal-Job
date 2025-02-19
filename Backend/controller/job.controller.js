import Job from "../models/job.model.js";
import { v4 as uuidv4 } from "uuid";


const createJob = async (req, res) => {
  try {
    const { judul, deskripsi, gaji, kategori, lokasi, user_id } = req.body;

    if (!judul || !deskripsi || !gaji || !kategori || !lokasi || !user_id) {
      return res.status(400).json({
        status: 400,
        message: "Pastikan semua data terisi",
      });
    }


    const job = await Job.create({
      id: uuidv4(), 
      judul,
      deskripsi,
      gaji,
      kategori,
      lokasi,
      user_id, 
    });

    return res.status(201).json({
      status: 201,
      message: "Job berhasil dibuat",
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      detail: error.message,
    });
  }
};


const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    return res.status(200).json({
      status: 200,
      message: "Daftar pekerjaan berhasil diambil",
      data: jobs,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      detail: error.message,
    });
  }
};

export { createJob, getAllJobs };
