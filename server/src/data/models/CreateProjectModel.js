const { model } = require("mongoose");
const { Project } = require("../schema/projectsSchema");

const ProjectModel = new model(`ProjectModel`, Project);

module.exports = { ProjectModel };
