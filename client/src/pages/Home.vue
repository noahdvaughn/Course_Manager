<template>
    <div>
        <h1>Welcome to the Course Manager.</h1>
        <h3>An app to keep track of your students and their grades.</h3>
        <button @click="$router.push('/view-courses')">View Courses</button>
        <button @click="$router.push('/view-students')">View Students</button>
    </div>
</template>

<script>

  export default {
    name: 'HomePage'
  }
</script>
