<script lang="ts">
import appHeader from '@cmp/app-header.vue';
import appFooter from '@cmp/app-footer.vue';

export default {
  name: 'app',
  components: {
    appHeader,
    appFooter,
  },
}
</script>

<template>
  <div class="app">

    <app-header />

    <div class="app-container">
      <router-view />
    </div>

    <app-footer />

  </div>
</template>

<style>
.button {
  @apply text-center text-sm cursor-pointer border-0;
}

.title {
  @apply text-base font-semibold;
}

.link {
  @apply underline;
}

.text {
  @apply text-base text-gray-700;
}

.app {
  @apply min-h-full h-full flex flex-col;
}

.app-container {
  @apply flex flex-col items-start max-w-5xl px-4 m-auto h-full w-full;
}

.app-header {
  @apply h-16 w-full py-2 flex justify-center items-center;
}

.app-content {
  @apply py-6 w-full;
}
</style>
