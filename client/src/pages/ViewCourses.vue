<template>
    <div>
      <h1>View Courses</h1>
      <ul>
        <li v-for="course in courses" :key="course.id">{{ course.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
    import Vue from 'vue';
    import axios from 'axios';
  
    export default {
      data() {
        return {
          courses: []
        }
      },
      mounted() {
        axios.get('/api/courses')
          .then(response => {
            this.courses = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  </script>
  