const { Student } = require('../models')

const CreateStudent = async (req, res) => {
  try {
    const response = await Student.create({ ...req.body })
    res.status(200).send(response)
  } catch (error) {
    throw error
  }
}
const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}
const GetStudentById = async (req, res) => {
  try {
    let student_id = parseInt(req.params.student_id)
    const student = await Student.findAll({
      where: { id: student_id }
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const DeleteStudent = async (req, res) => {
  try {
    let student_id = parseInt(req.params.student_id)
    await Student.destroy({ where: { id: student_id } })
    res.send({ message: `Deleted student with an ID of ${student_id}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateStudent,
  GetAllStudents,
  GetStudentById,
  DeleteStudent
}
