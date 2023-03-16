<template>
    <div>
      <h1>View Students</h1>
      <ul>
        <li v-for="student in students" :key="student.id">{{ student.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
  
    export default {
      data: () => ({
          students: []
        }),
      mounted() {
        this.getAllStudents()
      },
      methods: {
        async getAllStudents() {
            const res = await axios.get('/api/students')
            this.students = res.data
        }
      }
    }
  </script>
  