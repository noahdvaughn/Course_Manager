<template>
  <div>
    <section>
      <div>
        <h1>Student Details</h1>
        <div v-for="detail in studentDetails" :key="detail.id"></div>
      </div>
    </section>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: 'StudentDetails',
  data: () => ({
    studentDetails: null
  }),
  mounted() {
    this.studentDetails()
  },
  methods: {}
}
</script>
