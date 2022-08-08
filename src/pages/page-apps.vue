<script lang="ts">
import appMenu from '@src/components/app-menu.vue';

export default {
  name: 'page-apps',
  components: {
    appMenu,
  },
  setup() {
    const menuItems = [
      {
        name: 'Поисковик имён',
        nameTo: 'page-name-finder',
        active: false,
      },
      {
        name: 'Фильтр авто',
        nameTo: 'page-cars-filter',
        active: false,
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

    <h1 class="text-2xl font-semibold">
      Мои приложения
    </h1>

    <div class="px-2 py-4">
      <app-menu :items="menuItems" />

      <div class="py-12">
        <router-view />
      </div>
    </div>

  </div>
</template>
