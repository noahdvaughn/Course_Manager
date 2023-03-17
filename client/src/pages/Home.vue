<template>
  <div class="homepage">
    <h1>Welcome to the Course Manager!</h1>
    <h2><i>An app to keep track of your students and their grades.</i></h2>
    <div class="buttons">

      <button class="view" @click="$router.push('/courses')">
        View Courses
      </button>
      <button class="view" @click="$router.push('/students')">
        View Students
      </button>

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
}
h2 {
  color: #5d45f6;
}

.homepage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 40px;
}

.view {
  background-color: rgb(211, 218, 255);
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
