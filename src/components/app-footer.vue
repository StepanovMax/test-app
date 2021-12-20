<script lang="ts">
export default {
  name: 'app-footer',
}
</script>

<template>
  <footer class="app-footer">
    <p class="text app-footer_text">
      SM {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<style scoped>
.app-footer {
  @apply h-8 w-full py-3 bg-gray-100 flex justify-center items-center;
}

.app-footer_text {
  @apply text-xs text-gray-700;
}
</style>
