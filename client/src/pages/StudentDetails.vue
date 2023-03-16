<template>
  <div>
    <section>
      <div>
        <h1>Student Details</h1>
        <div v-for="detail in studentDetails" :key="detail.id">
          <h1>{{ detail.name }}</h1>
          <h2>{{ detail.email }}</h2>
        </div>
        <div v-for="course in courses" :key="course.id">
          <h2>{{ course.course_name }}</h2>
          <h2>{{ course.letter }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//import { assertExpressionStatement } from '@babel/types'

import axios from 'axios'
export default {
  name: 'StudentDetails',
  data: () => ({
    studentDetails: null,
    courses: null
  }),
  mounted() {
    let studentId = this.$route.params.studentId
    this.studentDetails(studentId), this.getCourses(studentId)
  },
  methods: {
    async getStudentDetails(studentId) {
      const response = await axios.get(
        `https://localhost:3001/api/student/get-student-by-id/${studentId}`
      )
      this.studentDetails = response.data
    },
    async getCourses(studentId) {
      const response = await axios.get(
        `https://localhost:3001/api/student_course/get-student-course-by-student/${studentId}`
      )
      this.courses = response.data
    }
  }
}
</script>
