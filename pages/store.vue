<template>
  <section class="container">
    <div>
      <p>{{ $store.state.hello.message }}</p>
      <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Dispatch with payload')">Dispatch</button>
    </div>
    <router-link to="/">Top Page</router-link>
  </section>
</template>

<script>
export default {
}
</script>