<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to the Course Manager.</h1>
    <h3>An app to keep track of your students and their grades.</h3>
    <button @click="$router.push('/courses')">View Courses</button>
    <button @click="$router.push('/students')">View Students</button>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>
