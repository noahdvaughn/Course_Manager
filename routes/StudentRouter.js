const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.post('/create-student', controller.CreateStudent)
Router.get('/get-all-students', controller.GetAllStudents)
Router.get('/get-student-by-id/:student_id', controller.GetStudentById)
Router.delete('/delete-student/:student_id', controller.DeleteStudent)
