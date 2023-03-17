<template>
  <div>
    <form @submit="CreateCourse">
      <h1 class="enter">Add a Course</h1>
      <input placeholder="Course Name" v-model="course_name" />
      <button class="addcourse">Add Course</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateCourse',
  data: () => ({
    course_name: ''
  }),
  props: {},
  methods: {
    async CreateCourse() {
      let response = await axios.post(
        `http://localhost:3001/api/course/create-course`,
        { name: this.course_name }
      )
      console.log(response)
    }
  }
}
</script>

<style>

.addcourse {
  background-color: rgb(211, 218, 255);
  color: #5d45f6;
  font-weight: bold;
  padding: 0.2em;
  width: 150px;
  /* height: 20px; */
  font-size: 20px;
  border: 4px solid #5d45f6;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;
}

</style>
