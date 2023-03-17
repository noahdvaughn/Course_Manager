<template>
  <div>
    <section>
      <div>
        <h1>Student Details</h1>
        <div v-for="detail in studentDetails" :key="detail.id">
          <h3>{{ detail.name }}-&nbsp;{{ detail.email }}</h3>
        </div>
        <div v-for="course in courses" :key="course.id">
          <h2>{{ course.course_name }}:&nbsp;{{ course.letter }}</h2>
        </div>
      </div>
    </section>
    <div v-if="student_id">
      <CreateStudent_Course  :my_student_name="studentDetails[0].name"/>
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
      console.log(this.my_student_name)
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
    },
    doMath(courses){
      // let courseArray = this.courses
      // console.log(courses)
      
      courses.forEach((e)=>{
        this.gpaNum += e.score
      })
      this.gpaNum = this.gpaNum / courses.length
      // console.log(this.gpaNum)
    }
  },
  components: { CreateStudent_Course }
}

</script>
