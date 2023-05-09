import express from "express";
const Router = express.Router();
import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobsController.js";

Router.route("/").get(getAllJobs).post(createJob);

Router.route("/stats").get(showStats);
Router.route("/:id").delete(deleteJob).patch(updateJob);

export default Router;
