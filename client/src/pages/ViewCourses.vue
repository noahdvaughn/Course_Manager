<template>
    <div>
        <h1>View Courses</h1>
        <div v-for="course in courses" :key="course.id">
            <h1>{{ course.name }}</h1>
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
        async getAllCourses() {
            const res = await axios.get('http://localhost:3001/api/get-all-courses')
            this.courses = res.data
        }
    }
}
</script>
  