<script lang="ts">
import nameFinder from '@/components/name-finder/name-finder.vue';

export default {
  name: 'page-name-finder',
  components: {
    nameFinder,
  },
}
</script>

<template>
  <div class="app-content">
    <h1 class="font-semibold text-lg">
      Name finder
    </h1>

    <name-finder />
  </div>
</template>
