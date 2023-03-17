<template>
  <div key="componentKey">
    <section>
      <div>
        <h1>Student Details</h1>
        <div class="studentdetail">
        <div v-for="detail in studentDetails" :key="detail.id" >
          <h3 class="who">>{{ detail.name }}-&nbsp;{{ detail.email }}</h3>
        </div>
        <h3 v-if="gpaNum">Average Gpa: {{ this.gpaNum }}</h3>
        <div v-for="course in courses" :key="course.id" >
          <h2 @click="selectCourse(course.courseId)">{{ course.course_name }}:&nbsp;{{ course.letter }}</h2>
          </div>
        </div>
      </div>
    </section>
    <div v-if="student_id">
      <CreateStudent_Course  :student_id="student_id" :my_student_name="studentDetails[0].name" @hitEnrolled="hitEnrolled"/>
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
    student_name: '',
    changed: 0
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
    doMath(courses){
      let counter = 0
      courses.forEach((e)=>{
        counter += parseInt(e.score)
      })
      this.gpaNum = counter / courses.length
    },
    selectCourse(courseId) {
        this.$router.push(`/courses/${courseId}`)
    },
    hitEnrolled(){
      console.log('hit')
      this.$forceUpdate()
    }
  },
  components: { CreateStudent_Course }
}
</script>

<style>
.studenttitle {
  color: #5d45f6;
  margin-top: 50px;
  font-size: 40px;
  text-align: left;
  margin-left: 20px;
}
.studentdetail {
}

.who {
  margin-top: 20px;
  margin-left: 20px;
  color: #5d45f6;
  text-decoration: none;
  font-weight: 900;
  text-align: left;
  font-size: 25px;
}
</style>
