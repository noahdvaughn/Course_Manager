<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/courses">Courses</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
/* .router-link-exact-active {
  color: #ffffff;
} */

nav {
  background: #5d45f6;
  padding: 0, 1em;
  display: flex;
  justify-content: flex-end;
}

nav a {
  margin: 1em;
  color: rgb(194, 235, 82);
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
}

a {
  font-size: 20px;
}
</style>
