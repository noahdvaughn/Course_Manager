<template>
  <div class="viewpage">
    <div class="viewstudents">
      <CreateStudent />
    </div>
    <div class="viewstudents">
      <h1 class="enter">View Students</h1>
      <div
        v-for="student in students"
        :key="student.id"
        @click="selectStudent(student.id)"
      >
        <StudentCard :name="student.name" :email="student.email" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CreateStudent from '@/components/CreateStudent.vue'
import StudentCard from '@/components/StudentCard.vue'

export default {
  data: () => ({
    students: []
  }),
  components: {
    CreateStudent,
    StudentCard
  },
  mounted() {
    this.getAllStudents()
  },
  methods: {
    async getAllStudents() {
      const res = await axios.get(
        'http://localhost:3001/api/student/get-all-students'
      )
      this.students = res.data
    },
    selectStudent(studentId) {
      this.$router.push(`/students/${studentId}`)
    }
  }
}
</script>
<style>
.viewpage {
  display: flex;
  justify-content: space-around;
}
.viewstudents {
  width: 500px;
  margin-top: 200px;
  padding: 10px;
}
</style>
