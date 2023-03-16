<template>
    <div>
        <h1>Enter Student Information</h1>
        <form @submit="createStudent">
            <div>
                <label>Name: </label>
                <input type="text" v-model="name"/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" v-model="email"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
 data: () => ({
    name: "",
    email: ""
 }),
 methods: {
    async createStudent() {
        const res = await axios.post(`http://localhost:3001/api/student/create-student`, {
            name: this.name,
            email: this.email
        })
        console.log(res.data);
    }
 }
}
</script>