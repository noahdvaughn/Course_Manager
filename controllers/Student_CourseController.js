const { Student_Course } = require('../models')

const CreateStudent_Course = async (req, res) => {
  try {
    const response = await Student_Course.create({ ...req.body })
    res.status(200).send(response)
  } catch (error) {
    throw error
  }
}
const GetStudent_CourseByCourseId = async (req, res) => {
  try {
    let course_id = parseInt(req.params.course_id)
    const course = await Student_Course.findAll({
      where: { courseId: course_id }
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}
const GetStudent_CourseByStudentId = async (req, res) => {
  try {
    let student_id = parseInt(req.params.student_id)
    const course = await Student_Course.findAll({
      where: { studentId: student_id }
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}
const DeleteStudent_Course = async (req, res) => {
  try {
    let studentcourse_id = parseInt(req.params.studentcourse_id)
    await Student_Course.destroy({ where: { id: studentcourse_id } })
    res.send({ message: `Deleted course with an ID of ${studentcourse_id}!` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  CreateStudent_Course,
  GetStudent_CourseByCourseId,
  GetStudent_CourseByStudentId,
  DeleteStudent_Course
}
