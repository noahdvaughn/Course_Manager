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
    let student_id = this.$route.params.student_id
    //console.log(this.$route.params.studentId)

    this.getStudentDetails(student_id)
    this.getCourses(student_id)
  },
  methods: {
    async getStudentDetails(student_id) {
      const response = await axios.get(
        `http://localhost:3001/api/student/get-student-by-id/${student_id}`
      )
      this.studentDetails = response.data
    },
    async getCourses(student_id) {
      const response = await axios.get(
        `https://localhost:3001/api/student_course/get-student-course-by-student/${student_id}`
      )
      //console.log(response.data)
      this.courses = response.data
    }
  }
}
</script>
