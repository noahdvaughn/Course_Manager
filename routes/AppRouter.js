const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const Student_CourseRouter = require('./Student_CourseRouter')

Router.use('/student', StudentRouter)
Router.use('/course', CourseRouter)
Router.use('/student_course', Student_CourseRouter)

module.exports = Router
