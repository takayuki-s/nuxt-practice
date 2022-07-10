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
export default {
  asyncData({ params, error }) {
    return axios.get(process.env.USERS_URL).then((res) => {
      return { users: res.data }
    })
    .catch((e => {
      console.log(e.response.status) // 404など
      error({ statusCode: e.response.status, message: e.message})
    }))
  }
}
</script>