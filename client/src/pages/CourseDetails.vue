<template>
    <div>
        <h1> {{ course.name }}</h1>
        <div v-for="student in students" :key="student.id">
            {{ student.name }} - {{ student.grade }}
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        course: {},
        students: []
    }),
    mounted: {
        
    },
    methods: {
        // getStudentsByCourse
    }
}
</script>