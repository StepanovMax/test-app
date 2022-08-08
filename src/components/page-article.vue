<template>
  <div class="">
    <div class="mb-2">
      <router-link :to="{ name: 'page-home' }">
        &larr; Back
      </router-link>
    </div>
    <h1 class="mb-4 title">
      Article #{{ $route.params.articleId }}
    </h1>
    <div v-if="article.date">
      <p class="">
        {{ article.date }}
      </p>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'PageArticle',
  props: {
    article: {
      type: Object,
      default: {},
      required: true,
    },
  },
  // mounted() {
  //   console.log('article ::', this.article)
  // },
}
</script>


<style scoped>
.container {
  @apply flex flex-col items-start max-w-5xl px-4 m-auto h-full;
}

.article {
  @apply bg-gray-50 rounded-md mb-4 px-6 py-4 flex flex-col items-start w-full;
}

.title {
  @apply text-xl font-semibold;
}
</style>
