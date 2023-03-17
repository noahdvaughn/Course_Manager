<template>
  <div class="viewpage" v-if="courses">
    <div class="viewstudents">
      <CreateCourse />
    </div>
    <div class="viewstudents">
      <h1 class="enter">Courses</h1>
      <div
        v-for="course in courses"
        :key="course.id"
        @click="selectCourse(course.id)"
      >
        <CourseCard :name="course.name" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CourseCard from '@/components/CourseCard.vue'
import CreateCourse from '@/components/CreateCourse.vue'

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
      const res = await axios.get(
        'http://localhost:3001/api/course/get-all-courses'
      )
      console.log(res.data)
      this.courses = res.data
    },
    selectCourse(courseId) {
      this.$router.push(`/courses/${courseId}`)
    }
  }
}
</script>
