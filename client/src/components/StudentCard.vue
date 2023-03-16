<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ name }}</h3>
      <h3>{{ email }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    name: String,
    email: String
  }
}
</script>
