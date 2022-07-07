<template>
  <section class="container">
    <p>{{ message }}</p>
    <p>{{ $store.state.message }}</p>
    <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
    <!-- <button v-on:click="$store.commit('updateMessage', 'Commit with payload')">Update</button> -->
    <button v-on:click="$store.dispatch('updateMessageAction')">Dispatch</button>
    <hr>
    <router-link to="/price">Price Page</router-link>
    <router-link to="/axios">Axios Page</router-link>
    <router-link to="/image">Image Page</router-link>
  </section>
</template>
 
  
<script>
export default {
  data: function() {
    return {
      message: "Hello World!"
    }
  }
}
</script>
