<script lang="ts">
import appHeader from '@/components/app-header.vue';
import appFooter from '@/components/app-footer.vue';

export default {
  name: 'App',
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
