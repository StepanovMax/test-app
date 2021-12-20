<script lang="ts">
  export default {
    name: 'app-menu',
    props: {
      items: {
        type: Array,
        required: true,
      },
    }
  }
</script>

<template>
  <ul class="flex space-x-3">
    <li
      v-for="item in items"
      :key="item.nameTo"
      class="list-item"
    >
      <router-link
        :to="{
          name: item.nameTo
        }"
        class="underline font-semibold"
      >
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
