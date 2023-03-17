const Router = require('express').Router()
const controller = require('../controllers/CourseController')

Router.post('/create-course', controller.CreateCourse)
Router.get('/get-all-courses', controller.GetAllCourses)
Router.get('/get-course-by-id/:course_id', controller.GetCourseById)
Router.delete('/delete-course/:course_id', controller.DeleteCourse)

module.exports = Router
