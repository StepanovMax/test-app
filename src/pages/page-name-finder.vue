<template>
  <div class="app-content">
    <h1 class="text-lg font-semibold">
      Name finder
    </h1>

    <name-finder />
  </div>
</template>

<script lang="ts">
import nameFinder from '@src/components/name-finder/name-finder.vue';

export default {
  name: 'page-name-finder',
  components: {
    nameFinder,
  },
}
</script>
