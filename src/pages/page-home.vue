<script lang="ts">
export default {
  name: 'page-home',
}
</script>

<template>
  <div class="app-content">
    <h1 class="font-semibold text-2xl">
      Home
    </h1>
    <h2 class="font-normal text-xl mb-4">
      Here is my personal page and here you can find my last code.
    </h2>
    <p class="">
      To find more apps go to the <router-link :to="{ name: 'page-apps' }" class="link" title="Apps page">Apps</router-link> page
    </p>
  </div>
</template>


<style scoped>
.content {
  @apply w-full py-10 flex flex-col flex-grow justify-start;
}

.container {
  @apply flex flex-col items-start max-w-5xl px-4 m-auto h-full;
}
</style>

