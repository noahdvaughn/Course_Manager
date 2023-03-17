<template>
  <div>
    <h1 class="studenttitle">Course Details</h1>
    <h3 class="who" v-if="course[0]">{{ course[0].name }}</h3>
    <div v-for="student in students" :key="student.id">
      <h3 class="letter">{{ student.student_name }} - {{ student.letter }}</h3>
    </div>
  </div>
  <div>
    <button class="delete" @click="DeleteCourse(this.course_id)">
      Delete Course
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    course: {},
    students: [],
    course_id: 0
  }),
  mounted() {
    let courseId = parseInt(this.$route.params.course_id)
    console.log(courseId)
    this.getCourseById(courseId)
    this.course_id = courseId
    this.getStudents(courseId)
  },
  methods: {
    async getCourseById(courseId) {
      const res = await axios.get(
        `http://localhost:3001/api/course/get-course-by-id/${courseId}`
      )
      this.course = res.data
    },
    async getStudents(courseId) {
      const response = await axios.get(
        `http://localhost:3001/api/student_course/get-student-course-by-course/${courseId}`
      )
      console.log(response)
      this.students = response.data
    },
    async DeleteCourse(courseId) {
      await axios.delete(
        `http://localhost:3001/api/course/delete-course/${courseId}`
      )
      this.$router.push('/courses')
    }
  }
}
</script>

<style>
.letter {
  color: #5d45f6;
  font-size: 20px;
  padding: 1px;
  border: 2px solid #5d45f6;
  border-radius: 3px;
  margin: 2px;
  font-weight: bold;
  width: 100px;
  text-align: center;
}
</style>
