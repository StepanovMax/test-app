<template>
  <div class="app-content">

    <div class="mb-4">
      <h1 class="font-semibold text-2xl mb-4">
        Главная
      </h1>

      <h2 class="font-normal text-xl mb-4">
        Привет.<br>Меня зовут Макс.<br>Это мой персональный сайт.
      </h2>
    </div>

    <template v-if="false">
      <div>
        <router-link
          v-for="(article, key) in articles"
          :key="key"
          :to="{ name: 'page-article', params: { articleId: article.id, article: article } }"
        >
          <div class="article-mini">
            <p class="text-sm text-gray-400">
              {{ article.date }}
            </p>
            <h3 class="font-semibold">
              {{ article.title }}
            </h3>
            <p class="">
              {{ article.preview }}
            </p>
            <img src="" alt="">
          </div>
        </router-link>
      </div>
    </template>

  </div>
</template>


<script lang="ts">
export default {
  name: 'page-home',
  setup() {
    const articles = [
      {
        id: 1,
        title: 'Иконка Telegram в векторе, растре, с анимацией и с источниками',
        preview: 'Я очень люблю векторную графику и всегда, когда подворачивается случай, использую её по назначению. Особенно в шрифтовых иконках, что в последнее время стало очень популярным. Надеюсь, никто не станет спорить, что в вопросе иконок вектор гораздо круче растра. Вот и сейчас у меня возникла задача создания иконка Telegram  для шрифтовых иконок.',
        content: 'In ut quam vitae odio lacinia tincidunt. Praesent venenatis metus at tortor pulvinar varius. Aliquam erat volutpat. Nulla consequat massa quis enim. Praesent egestas tristique nibh. In turpis. Cras id dui. Suspendisse potenti. Praesent nonummy mi in odio. Proin magna.',
        date: '10.11.2011',
        tags: ['design', 'javascript', 'nodejs'],
      },
      {
        id: 2,
        title: 'Новая команда для поиска в гугл стала доступна — «**» (двойная звездочка).',
        preview: 'Некоторые зарубежные пользователи обнаружили, что популярный поисковик обзавелся новой командой для поиска в гугл — «**»(двойная звездочка без кавычек). Она помогает найти компании, находящиеся рядом с вами.',
        content: 'In ut quam vitae odio lacinia tincidunt. Praesent venenatis metus at tortor pulvinar varius. Aliquam erat volutpat. Nulla consequat massa quis enim. Praesent egestas tristique nibh. In turpis. Cras id dui. Suspendisse potenti. Praesent nonummy mi in odio. Proin magna.',
        date: '02.09.2012',
        tags: ['design', 'javascript', 'nodejs'],
      },
      {
        id: 3,
        title: 'Ajax Search Pro — гениальное решение для поиска на WordPress',
        preview: 'Сегодня я хочу описать плагин поиска на WordPress — Ajax Search Pro. Плагин очень функционален, имеет громадное количество настроек. С первого раза в них можно запутаться. И именно для этого и была написана эта статья — чтобы быстро и качественно разобраться с этим плагином. Также вы сможете скачать его Pro версию бесплатно и воспользоваться демо версией плагина.',
        content: 'In ut quam vitae odio lacinia tincidunt. Praesent venenatis metus at tortor pulvinar varius. Aliquam erat volutpat. Nulla consequat massa quis enim. Praesent egestas tristique nibh. In turpis. Cras id dui. Suspendisse potenti. Praesent nonummy mi in odio. Proin magna.',
        date: '04.10.2013',
        tags: ['design', 'javascript', 'nodejs'],
      },
    ];

    return {
      articles,
    }
  },
}
</script>


<style scoped>
.content {
  @apply w-full py-10 flex flex-col flex-grow justify-start;
}

.container {
  @apply flex flex-col items-start max-w-5xl px-4 m-auto h-full;
}

.article-mini {
  @apply bg-gray-50 rounded-md mb-4 px-6 py-4 flex flex-col items-start w-full;
}

.title {
  @apply cursor-pointer text-xl font-semibold;
}
</style>

