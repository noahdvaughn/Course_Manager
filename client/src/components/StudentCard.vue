<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ student.name }}</h3>
      <h3>{{ student.email }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    students: {}
  }
}
</script>
