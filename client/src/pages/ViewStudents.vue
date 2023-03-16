<template>
  <div>
    <h1>View Students</h1>
    <div>
      <CreateStudent />
    </div>
    <div>
      <div v-for="student in students" :key="student.id" @click="selectStudent(student.id)">
        <StudentCard 
        :name="student.name" 
        :email="student.email"/>
      </div>
    </div>


  </div>
</template>
  
<script>
import axios from 'axios';
import CreateStudent from '@/components/CreateStudent.vue';
import StudentCard from '@/components/StudentCard.vue';

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
      const res = await axios.get('http://localhost:3001/api/student/get-all-students')
      this.students = res.data
    },
    selectStudent(studentId) {
    this.$router.push(`/students/${studentId}`)
  }
  },
  
}
</script>
  