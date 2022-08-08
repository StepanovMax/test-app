<script lang="ts">
import appLogo from '@src/components/app-logo.vue';
import appMenu from '@src/components/app-menu.vue';

export default {
  name: 'app-header',
  components: {
    appLogo,
    appMenu,
  },
  setup () {
    const menuItems = [
      {
        name: 'Главная',
        nameTo: 'page-home',
      },
      {
        name: 'Приложения',
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
      <div class="flex items-center justify-between w-full">

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
