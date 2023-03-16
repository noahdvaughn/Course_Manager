<template>
    <div>
        <h1>View Courses</h1>
        <div v-for="course in courses" :key="course.id">
            <CourseCard :name="course.name" />
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import CourseCard from '@/components/CourseCard.vue';

export default {
    name: 'ViewCourses',
    data: () => ({
        courses: []
    }),
    components: {
        CourseCard
    },
    mounted() {
        this.getAllCourses()
    },
    methods: {
        async getAllCourses() {
            const res = await axios.get('http://localhost:3001/api/course/get-all-courses')
            console.log(res.data);

            this.courses = res.data
        }
    }
}
</script>
  