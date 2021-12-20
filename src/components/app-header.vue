<script lang="ts">
import appLogo from '@/components/app-logo.vue';
import appMenu from '@/components/app-menu.vue';

export default {
  name: 'app-header',
  components: {
    appLogo,
    appMenu,
  },
  setup () {
    const menuItems = [
      {
        name: 'Home',
        nameTo: 'page-home',
      },
      {
        name: 'Apps',
        nameTo: 'page-apps',
      },
    ]

    return {
      menuItems,
    }
  }
}
</script>

<template>
  <header class="py-2">
    <div class="app-container">
      <div class="flex justify-between items-center w-full">

        <app-logo />

        <app-menu :items="menuItems" />

      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  @apply w-full;
}
</style>
