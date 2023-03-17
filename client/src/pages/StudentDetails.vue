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
      <CreateStudent_Course  :student_id="student_id" :student_name="student_name"/>
    </div>
  </div>
</template>

<script>
//import { assertExpressionStatement } from '@babel/types'

import CreateStudent_Course from '@/components/CreateStudent_Course.vue'
import axios from 'axios'
export default {
    name: "StudentDetails",
    data: () => ({
        studentDetails: [],
        courses: [],
        student_id: null,
        gpaNum: 0
    }),
    mounted() {
        let studentId = parseInt(this.$route.params.student_id);
        this.getStudentDetails(studentId);
        this.getCourses(studentId)
        this.student_id = studentId;
        this.doMath();
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
        doMath(){
          let courseArray = this.courses
          console.log(courseArray)
          courseArray.forEach((e)=>{
            this.gpaNum += e.score
          })
          this.gpaNum = this.gpaNum / courseArray.length
          console.log(this.gpaNum)
        }
    },
    components: { CreateStudent_Course }
}
</script>
