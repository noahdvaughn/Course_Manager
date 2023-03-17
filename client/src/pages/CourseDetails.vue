<template>
    <div>
        <h1 v-if="course[0]">{{ course[0].name }}</h1>
        <div class="grid-container">
            <div class="grid-item" v-for="student in students" :key="student.id">
                <div class="letter">
                    <h2 >{{ student.student_name }}</h2>
                    <h1 class="studentGrade">{{ student.letter }}</h1>
                </div>

            </div>
            <div class="grid-item"></div>
        </div>
        <button class="delete" @click="DeleteCourse(this.course_id)">
            Delete Course
        </button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        course: {},
        students: [],
        course_id: 0
    }),
    mounted() {
        let courseId = parseInt(this.$route.params.course_id)
        console.log(courseId)
        this.getCourseById(courseId)
        this.course_id = courseId
        this.getStudents(courseId)
    },
    methods: {
        async getCourseById(courseId) {
            const res = await axios.get(
                `http://localhost:3001/api/course/get-course-by-id/${courseId}`
            )
            this.course = res.data
        },
        async getStudents(courseId) {
            const response = await axios.get(
                `http://localhost:3001/api/student_course/get-student-course-by-course/${courseId}`
            )
            console.log(response)
            this.students = response.data
        },
        async DeleteCourse(courseId) {
            await axios.delete(
                `http://localhost:3001/api/course/delete-course/${courseId}`
            )
            this.$router.push('/courses')
        }
    }
}
</script>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: center;

}

.letter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #5d45f6;
    border: 2px solid #5d45f6;
    border-radius: 20px;
    font-weight: bold;
    width: 300px;
    height: 200px;
    text-align: center;
}

.studentGrade {
    color: orange;
}
</style>
