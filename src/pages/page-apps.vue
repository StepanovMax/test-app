<script lang="ts">
import appMenu from '@/components/app-menu.vue';

export default {
  name: 'page-apps',
  components: {
    appMenu,
  },
  setup () {
    const menuItems = [
      {
        name: 'Name finder',
        nameTo: 'page-name-finder',
      },
    ]

    return {
      menuItems,
    }
  }
}
</script>

<template>
  <div class="app-content">

    <h1 class="font-semibold text-2xl">
      My apps
    </h1>

    <div class="py-4 px-2">
      <app-menu :items="menuItems" />

      <div class="py-12">
        <router-view />
      </div>
    </div>

  </div>
</template>
