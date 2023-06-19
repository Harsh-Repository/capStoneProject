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

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
  mongoose.connect(uri);
});
