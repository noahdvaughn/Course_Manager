import { createWebHistory, createRouter } from 'vue-router'
import ViewStudents from '../pages/ViewStudents.vue'
import ViewCourse from '../pages/ViewCourse.vue'
import StudentDetails from '../pages/StudentDetails.vue'
import CourseDetails from '../pages/CourseDetails.vue'

const routes = [
  { path: '/students', component: ViewStudents, name: 'ViewStudents' },
  { path: '/courses', component: ViewCourse, name: 'ViewCourse' },
  {
    path: '/students/:student_id',
    component: StudentDetails,
    name: 'StudentDetails'
  },
  {
    path: '/courses/:course_id',
    component: CourseDetails,
    name: 'CourseDetails'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
