<template>
  <div>
      <p>Enroll Student in Class below:</p>
      <select  @change="changeEnrolled">
             <option v-for="course in courses" :value='course.id' :key="course.id">{{ course.name }}</option>
        </select>
        <select v-model="grade">
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>F</option>
        </select>
        <button @click="enrollInCourse">Enroll</button>
  </div>
  <button @click="DeleteStudent">Delete Student?</button>
</template>

<script>
import axios from 'axios';
// import CourseCard from './CourseCard.vue';
export default {
data: () => ({
  courses: [],
  courseSelected: null,
  selectedId: 1,
  grade: 'A',
  mathNum: 0,
  avgNum: 0,
  student_name: ''
}),
props: {
  student_id: Number,
  my_student_name: String
},
mounted() {
  this.student_name = this.my_student_name
        console.log(this.my_student_name)
        this.getCourses()
        
    },
methods: {
  async getCourses(){
    const res = await axios.get('http://localhost:3001/api/course/get-all-courses')
            this.courses = res.data
            
  },
  async enrollInCourse() {
    let score 
    switch (this.grade){
      case 'A':
        score = 4;
        break;
      case 'B':
        score = 3;
        break;
      case 'C':
        score = 2;
        break;
      case 'D':
        score = 1;
        break;
      case 'F':
        score = 0;
        break;

    } 

    const res = await axios.post('http://localhost:3001/api/student_course/create-student-course', {
      score: score, letter: this.grade, student_name: this.student_name, course_name: this.courses[this.mathNum].name,
      studentId: this.student_id, courseId: this.selectedId
    })
    console.log(res)
  },
  changeEnrolled(e){
    
    this.selectedId = parseInt(e.target.value) 
    this.mathNum = e.target.selectedIndex
    console.log(this.grade)
  },
  async DeleteStudent(){
    await axios.delete(`http://localhost:3001/api/student/delete-student/${this.student_id}`)
    this.$router.push(`/students`)

  }
  
},
components: {}
}
</script>