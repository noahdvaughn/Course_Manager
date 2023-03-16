const Router = require('express').Router()
const controller = require('../controllers/Student_CourseController')

Router.post('/create-student-course', controller.CreateStudent_Course)
Router.get(
  '/get-student-course-by-student/:student_id',
  controller.GetStudent_CourseByStudentId
)
Router.get(
  '/get-student-course-by-course/:course_id',
  controller.GetStudent_CourseByCourseId
)
Router.delete(
  '/delete-student-course/:studentcourse_id',
  controller.DeleteStudent_Course
)
