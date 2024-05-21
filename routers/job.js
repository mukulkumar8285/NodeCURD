const express = require("express");
const JobControllers = require("../controllers/job")

const router = express.Router();

router.post("/api/jobs", JobControllers.createJob);
router.get("/api/jobs" , JobControllers.listJob);
router.put("/api/jobs/:id" , JobControllers.editJob);
router.delete("/api/jobs/:id" , JobControllers.DeleteJob);


module.exports = router;