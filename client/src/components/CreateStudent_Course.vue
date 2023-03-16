<template>
  <div>
      <h1>Enroll Student in Class below</h1>
      <div  v-for="course in courses" :key="course.id">
            <CourseCard :name="course.name" />
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
data: () => ({
  courses: []
}),
mounted() {
        this.getAllCourses()
    },
methods: {
  async getCourses(){
    const res = await axios.get('http://localhost:3001/api/course/get-all-courses')
            console.log(res.data);
            this.courses = res.data
  }
  
}
}
</script>