
const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

// Submit a new internship application
router.post("/", async (req, res) => {
  try {
    const { name, email, rollNumber, internshipId, internshipTitle } =
      req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !rollNumber?.trim() ||
      !internshipId ||
      !internshipTitle?.trim()
    ) {
      return res.status(400).json({
        message: "Please provide all required application details.",
      });
    }

    const application = await Application.create({
      name,
      email,
      rollNumber,
      internshipId,
      internshipTitle,
    });

    return res.status(201).json({
      message: "Application submitted successfully!",
      application,
    });
  } catch (error) {
    console.error("Application submission error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Unable to save the application. Please try again.",
    });
  }
});

// Retrieve submitted applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });

    return res.status(200).json({
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("Fetch applications error:", error);

    return res.status(500).json({
      message: "Unable to retrieve applications.",
    });
  }
});

module.exports = router;
