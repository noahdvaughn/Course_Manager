<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ course.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    name: String
  }
}
</script>
