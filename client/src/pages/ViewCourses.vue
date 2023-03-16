<template>
    <div v-if="courses">
        <h1>View Courses</h1>
        <div v-for="course in courses" :key="course.id">
            <CourseCard :name="course.name" />
        </div>
        <CreateCourse />
    </div>
</template>
  
<script>
import axios from 'axios';
import CourseCard from '@/components/CourseCard.vue';
import CreateCourse from '@/components/CreateCourse.vue';

export default {
    name: 'ViewCourses',
    data: () => ({
        courses: []
    }),
    components: {
        CourseCard,
        CreateCourse
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
  