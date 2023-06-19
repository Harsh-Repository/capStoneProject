const { model } = require("mongoose");
const { CreateProject } = require("../schema/projectsSchema");

const ProjectModel = new model(`ProjectModel`, CreateProject);

module.exports = { ProjectModel };
