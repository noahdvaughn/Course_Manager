const { Course } = require('../models')
const { Student } = require('../models')
const { Student_Course } = require('../models')
const EX = async (req, res) => {
  try {
  } catch (error) {}
}
const CreateCourse = async (req, res) => {
  try {
    const response = await Course.create({ ...req, body })
    res.status(200).send(response)
  } catch (error) {
    throw error
  }
}

module.exports = {}
