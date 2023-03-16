<template>
  <div>
    <form @submit="CreateCourse">
      <h4>Add Course below</h4>
      <input v-model="course_name">
      <button>Add Course</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateCourse',
  data: () => ({
      course_name: ''
    }),
  props: {
    
  },
  methods: {
    async CreateCourse(){
      let response = await axios.post(`http://localhost:3001/api/course/create-course`, {name: this.course_name} )
      console.log(response)
    }
  }
}
</script>