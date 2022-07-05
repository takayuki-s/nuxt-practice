<template>
  <section class="container">
    <div>
      <!-- {{ users[0].id }}, {{ users[0].name }} -->
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }}, {{ user.name }}
        </li>
      </ul>
    </div>
    <router-link to="/">Top Page</router-link>
  </section>
</template>

<script>
const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/users'
export default {
  asyncData({ params }) {
    return axios.get(url).then((res) => {
      return { users: res.data }
    })
  }
}
</script>