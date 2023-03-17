<template>
    <div>
        <h1 v-if="course[0]"> {{ course[0].name }}</h1>
        <div v-for="student in students" :key="student.id">
            {{student.student_name}} - {{ student.letter }}
        </div>
    </div>
    <div>
        <button @click="DeleteCourse(this.course_id)">Delete Course</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        course: {},
        students: [],
        course_id: 0
    }),
    mounted() {
        let courseId = parseInt(this.$route.params.course_id)
        console.log(courseId);
        this.getCourseById(courseId)
        this.course_id = courseId
        this.getStudents(courseId)
    },
    methods: {
        async getCourseById(courseId) {
            const res = await axios.get(`http://localhost:3001/api/course/get-course-by-id/${courseId}`)
            this.course = res.data
        },
        async getStudents(courseId) {
            const response = await axios.get(`http://localhost:3001/api/student_course/get-student-course-by-course/${courseId}`);
            console.log(response);
            this.students = response.data;

        },
        async DeleteCourse(courseId) {
            await axios.delete(`http://localhost:3001/api/course/delete-course/${courseId}`)
            this.$router.push('/courses')
        }



    }
}
</script>