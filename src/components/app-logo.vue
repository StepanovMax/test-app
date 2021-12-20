<script lang="ts">
export default {
  name: 'app-logo',
}
</script>

<template>
  <router-link :to="{ name: 'page-home' }">
    <img
      class="img logo__img w-28"
      src="/public/assets/logo.svg"
    >
  </router-link>
</template>

<style scoped>

</style>
