<template>
  <div class="card">
    <div class="info-wrapper">
      <h3>{{ name }}</h3>
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
