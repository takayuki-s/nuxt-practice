<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr>
    <router-link to="/price">Price Page</router-link>
    <router-link to="/axios">Axios Page</router-link>
    <router-link to="/image">Image Page</router-link>
    <router-link to="/store">Store Page</router-link>
    <router-link to="/counter">Counter Page</router-link>
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
