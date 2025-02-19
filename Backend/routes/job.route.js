import express from "express";
import { createJob, getAllJobs } from "../controller/job.controller.js";

const jobRoute = Router();

jobRoute.post("/api/jobs", createJob); 
jobRoute.get("/api/jobs", getAllJobs); 

export default jobRoute;
