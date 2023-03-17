<template>
  <div>
    <section>
      <div>
        <h1>Student Details</h1>
        <div v-for="detail in studentDetails" :key="detail.id">
          <h3>{{ detail.name }}-&nbsp;{{ detail.email }}</h3>
        </div>
        <h3>Average Gpa: {{ this.gpaNum }}</h3>
        <div v-for="course in courses" :key="course.id" >
          <h2 @click="selectCourse(course.courseId)">{{ course.course_name }}:&nbsp;{{ course.letter }}</h2>
        </div>
      </div>
    </section>
    <div v-if="student_id">
      <CreateStudent_Course  :student_id="student_id" :my_student_name="studentDetails[0].name"/>
    </div>
  </div>
</template>

<script>
//import { assertExpressionStatement } from '@babel/types'

import CreateStudent_Course from '@/components/CreateStudent_Course.vue'
import axios from 'axios'
// import { timingSafeEqual } from 'crypto';
export default {

  
  name: "StudentDetails",
  data: () => ({
    studentDetails: [],
    courses: [],
    my_student_id: null,
    gpaNum: 0,
    student_name: ''
  }),
  mounted() {
    let studentId = parseInt(this.$route.params.student_id);
    this.getStudentDetails(studentId);
    this.getCourses(studentId)
    this.student_id = studentId;
    
  },
  updated(){
    if (this.studentDetails[0]){
      this.my_student_name = this.studentDetails[0].name
    }
    if (this.courses !== []){
      // console.log(this.courses)
      this.doMath(this.courses);
    }

  },
  methods: {
    async getStudentDetails(studentId) {
      const response = await axios.get(`http://localhost:3001/api/student/get-student-by-id/${studentId}`);
      this.studentDetails = response.data;
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
    async DeleteCourse(courseId){
      const response = await axios.delete(`http://localhost:3001/api/student_course/delete-student-course/${courseId}`)
      console.log(response)
    }
  },
  components: { CreateStudent_Course }
}

</script>
