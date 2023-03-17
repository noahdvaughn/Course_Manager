<template>
  <div>
    <section>
      <div>
        <h1>Student Details</h1>
        <div class="studentdetail">
          <div v-for="detail in studentDetails" :key="detail.id" class="who">
            <h2>{{ detail.name }}</h2>
            <h2>{{ detail.email }}</h2>
            <h2 v-if="gpaNum">GPA: {{ this.gpaNum }}</h2>
            <h2>Courses</h2>
            <div v-for="course in courses" :key="course.id">
              <h2 @click="selectCourse(course.courseId)">{{ course.course_name }}:&nbsp;{{ course.letter }}</h2>
            </div>
          </div>


        </div>
      </div>
    </section>
    <div v-if="student_id">
      <CreateStudent_Course :student_id="student_id" :my_student_name="studentDetails[0].name" />
    </div>
  </div>
</template>

<script>
//import { assertExpressionStatement } from '@babel/types'

import CreateStudent_Course from '@/components/CreateStudent_Course.vue'
import axios from 'axios'
// import { timingSafeEqual } from 'crypto';
export default {
  name: 'StudentDetails',
  data: () => ({
    studentDetails: [],
    courses: [],
    my_student_id: null,
    gpaNum: 0,
    student_name: ''
  }),
  mounted() {
    let studentId = parseInt(this.$route.params.student_id)
    this.getStudentDetails(studentId)
    this.getCourses(studentId)
    this.student_id = studentId
  },
  updated() {
    if (this.studentDetails[0]) {
      this.my_student_name = this.studentDetails[0].name
    }
    if (this.courses !== []) {
      // console.log(this.courses)
      this.doMath(this.courses)
    }
  },
  methods: {
    async getStudentDetails(studentId) {
      const response = await axios.get(
        `http://localhost:3001/api/student/get-student-by-id/${studentId}`
      )
      this.studentDetails = response.data
    },
    async getCourses(studentId) {

      const response = await axios.get(`http://localhost:3001/api/student_course/get-student-course-by-student/${studentId}`);
      this.courses = response.data;
      console.log(this.courses)
    },
    doMath(courses) {
      let counter = 0
      courses.forEach((e) => {
        counter += parseInt(e.score)
      })
      this.gpaNum = counter / courses.length
    },
    selectCourse(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
  },
  components: { CreateStudent_Course }
}
</script>

<style>
.studenttitle {
  color: #5d45f6;
  text-align: left;
}

.who {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid rgb(73, 73, 73);
  border-radius: 20px;
  color: #5d45f6;
  font-size: 25px;
}
</style>
