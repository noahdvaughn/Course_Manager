<template>
  <div class="card">
    <div class="info-wrapper">
      <div class="list">
        <h3>{{ name }}</h3>
      </div>
      <div class="list">
        <h3>{{ email }}</h3>
      </div>
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

<style>
.info-wrapper {
  display: flex;
  justify-content: center;
  border: 2px solid #5d45f6;
  margin: 5px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: all 0.2s ease-in-out;
  width: 450px;
}

.list {
  width: 200px;
}
.info-wrapper:hover {
  background-color: rgba(194, 235, 82, 0.372);
  transform: scale(1.1);
}
h3 {
  margin: 1em;
  color: #5d45f6;
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
  text-align: left;
  font-size: 15px;
}
</style>
