<script lang="ts">
import carsFilter from '@/components/cars-filter/cars-filter.vue';

export default {
  name: 'page-cars-filter',
  components: {
    carsFilter,
  },
}
</script>

<template>
  <div class="app-content">
    <h1 class="text-lg font-semibold">
      Cars filter 123
    </h1>

    <cars-filter />
  </div>
</template>
