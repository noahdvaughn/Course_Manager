<template>
  <div>
    <h1>Welcome to the Course Manager!</h1>
    <h2><i>An app to keep track of your students and their grades.</i></h2>
    <div class="buttons">
      <button class='view' @click="$router.push('/courses') ">View Courses</button>
      <button class='view' @click="$router.push('/students')">View Students</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
<style>
h1 {
  color: #5d45f6;
  margin-top: 100px;
  font-size: 40px;
}
h2 {
  color: #5d45f6;
  margin: 100px;
  font-size: 20px;
  margin: 0 auto;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  gap: 40px;
}

.view {
  background-color: rgba(194, 235, 82, 0.372);
  color: #5d45f6;
  font-weight: bold;
  padding: 0.7em;
  width: 200px;
  font-size: 20px;
  border: 4px solid #5d45f6;
  border-radius: 10px;
  cursor: pointer;
}
</style>
