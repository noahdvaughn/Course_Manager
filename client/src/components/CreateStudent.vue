<template>
  <div>
    <h1 class="enter">Enter Student Information</h1>
    <form @submit="createStudent">
      <div class="holder">
        <!-- <label>Name: </label> -->
        <input placeholder="Student Name" type="text" v-model="name" />
      </div>
      <div class="holder">
        <!-- <label>Email: </label> -->
        <input placeholder="Student Email" type="email" v-model="email" />
      </div>
      <button class="submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    name: '',
    email: ''
  }),
  methods: {
    async createStudent() {
      const res = await axios.post(
        `http://localhost:3001/api/student/create-student`,
        {
          name: this.name,
          email: this.email
        }
      )
      console.log(res.data)
    }
  }
}
</script>
<style>
.enter {
  color: #5d45f6;
  margin-top: 100px;
  font-size: 30px;
}

.holder {
  margin: 10px;
}

input {
  background-color: rgb(211, 218, 255);
  color: #5d45f6;
  padding: 3px;
  /* width: 200px; */
  font-size: 20px;
  border: 4px solid #5d45f6;
  border-radius: 10px;
  cursor: text;
}

.submit {
  background-color: rgb(211, 218, 255);
  color: #5d45f6;
  font-weight: bold;
  padding: 0.2em;
  width: 100px;
  /* height: 20px; */
  font-size: 20px;
  border: 4px solid #5d45f6;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
