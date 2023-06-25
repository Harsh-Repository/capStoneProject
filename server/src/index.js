require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { ProjectModel } = require("./data/models/CreateProjectModel");
const uri = process.env.MONGODB_STRING;
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/projects", async (req, res) => {
  let allPojects = await ProjectModel.find({});
  res.json(allPojects);
});

app.get("/project/:id", async (req, res) => {
  let projectData = await ProjectModel.findById(req.params.id).exec();
  res.json(projectData);
});

app.get("/contributors", async (req, res) => {
  try {
    const data = await ProjectModel.find({}, "title contribution");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/contributors/:id", async (req, res) => {
  try {
    // const { id } = req.params;
    const data = await ProjectModel.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/contributeProject/:id", async (req, res) => {
  try {
    const doc = await ProjectModel.findById(req.params.id);
    doc.contribution.push(req.body);
    await doc.save();
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/createProject", async (req, res) => {
  try {
    const createProjectData = new ProjectModel(req.body);
    await createProjectData.save();
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
  mongoose.connect(uri);
});
