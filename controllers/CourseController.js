const { Course } = require('../models')
const { Student } = require('../models')
const { Student_Course } = require('../models')

const CreateCourse = async (req, res) => {
  try {
    const response = await Course.create({ ...req, body })
    res.status(200).send(response)
  } catch (error) {
    throw error
  }
}
const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}
const GetCourseById = async (req, res) => {
  try {
    let course_id = parseInt(req.params.course_id)
    const course = await Course.findAll({
      where: { id: course_id }
    })
    res.send(course)
  } catch (error) {}
}

const DeleteCourse = async (req, res) => {
  try {
    let course_id = parseInt(req.params.course_id)
    await Course.destroy({ where: { id: course_id } })
    res.send({ message: `Deleted course with an ID of ${course_id}!` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  CreateCourse,
  GetAllCourses,
  GetCourseById,
  DeleteCourse
}
