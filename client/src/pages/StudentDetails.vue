<template :key="componentKey">
  <div >
    <section>
      <div>
        <div class="studentdetail" >
          <div v-for="detail in studentDetails" :key="detail.id" class="who">
            <h1 style="font-size: 40px;">{{ detail.name }}</h1>
            <h3 style="color: darkslategrey;">{{ detail.email }}</h3>
            <h1 v-if="gpaNum">GPA: {{ this.gpaNum }}</h1>
            <h2>Courses:</h2>
            <div v-for="course in courses" :key="course.id">
              <h2 style="color: orange;" @click="selectCourse(course.courseId)">{{ course.course_name }}:&nbsp;{{ course.letter }}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="student_id">
      <CreateStudent_Course  :student_id="student_id" :my_student_name="studentDetails[0].name" @hitEnrolled="hitEnrolled"/>
    </div>
  </div>
</template>

<script>
import CreateStudent_Course from '@/components/CreateStudent_Course.vue'
import axios from 'axios'
import { ref } from 'vue';
const componentKey = ref(0);
export default {
  name: 'StudentDetails',
  data: () => ({
    studentDetails: [],
    courses: [],
    my_student_id: null,
    gpaNum: 0,
    student_name: '',
    
  }),
  mounted() {
    let studentId = parseInt(this.$route.params.student_id)
    this.getCourses(studentId)
    this.getStudentDetails(studentId)
    this.student_id = studentId
  },
  updated() {
    if (this.studentDetails[0]) {
      this.my_student_name = this.studentDetails[0].name
    }
    if (this.courses !== []) {
      this.doMath(this.courses)
    }
  },
  methods: {
    async getStudentDetails(studentId) {
      const response = await axios.get(
        `http://localhost:3001/api/student/get-student-by-id/${studentId}`
      )
      this.studentDetails = response.data
    },
    async getCourses(studentId) {
      const response = await axios.get(`http://localhost:3001/api/student_course/get-student-course-by-student/${studentId}`);
      this.courses = response.data;
      console.log(this.courses)
    },
    doMath(courses) {
      let counter = 0
      courses.forEach((e) => {
        counter += parseInt(e.score)
      })
      this.gpaNum = counter / courses.length
      this.gpaNum.toFixed(2)
    },
    selectCourse(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
    hitEnrolled(){
      console.log(this.componentKey)
      componentKey.value += 1
      let studentId = parseInt(this.$route.params.student_id)
      this.getCourses(studentId)
    }
  },
  components: { CreateStudent_Course }
}
</script>
<style>
.studenttitle {
  color: #5d45f6;
  text-align: left;
}

.who {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid rgb(73, 73, 73);
  border-radius: 20px;
  color: #5d45f6;
  max-width: 800px;
  margin: 20px auto;
}

</style>
