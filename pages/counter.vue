<template>
  <section class="container">
    <div>
      <Counter />
      <hr>
      <Counter />
      <hr>
      <Counter />
      <hr>
    </div>
    <router-link to="/">Top Page</router-link>
  </section>
</template>

<script>
import Counter from '~/components/Counter.vue'
export default {
  components: {
    Counter
  }
}
</script>