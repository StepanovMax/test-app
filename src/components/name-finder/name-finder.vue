<template>
  <div class="name-finder">
    <div class="name-finder-inner">
      <p class="hint">
        {{ cyrillicHint }}
      </p>

      <header class="">
        <h1 class="text-2xl font-semibold">
          Поиск имён и фамилий
        </h1>
      </header>

      <div class="finder">
        <input
          :placeholder="!allowSearchFlag ? 'Введите имя' : 'Не работает'"
          type="text"
          class="search-input"
          v-model="nameValue"
        >

        <label for="hideAutosearch" class="cursor-pointer">
          <input id="hideAutosearch" type="checkbox" v-model="allowSearchFlag">
          Стоп
        </label>
      </div>

      <div class="flex space-x-8">

        <div class="">
          <h2 class="title">
            Найденные
          </h2>

          <ul class="list list_fetched">
            <li
              v-for="item in responseData"
              :key="item.value"
              class="list-item"
            >
              <name-finder-item
                :item="item"
                type="add"
              />
            </li>
          </ul>
        </div>

        <div class="">
          <h2 class="title">
            Добавленные
          </h2>

          <ul class="list list_added">
            <li
              v-for="item in addedList"
              :key="item.value"
              class="list-item"
            >
              <name-finder-item
                :item="item"
                type="remove"
              />
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>


<script lang="ts">
import {
  ref,
  watch,
  computed,
  provide,
} from 'vue';
import nameFinderItem from '@src/components/name-finder/name-finder-item.vue';

export default {
  name: 'name-finder',
  components: {
    nameFinderItem,
  },
  setup () {
    let x: string
    x = 'This is a string, not a bool'
    const nameValue = ref('' as string)
    const addedList = ref([])
    const responseData = ref(null)
    const isCyrillicSymbols = ref(null)
    const allowSearchFlag = ref(false)

    provide('addedList', addedList.value)

    const sendRequest = () => {
      const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio";
      const token = "43b7e62f8b5e35438a657ce267979f961dcb9670";

      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
        },
        body: JSON.stringify({query: nameValue.value})
      }

      if (!allowSearchFlag.value) {
        fetch(url, options)
          .then(response => response.text())
          .then(result => {
            responseData.value = JSON.parse(result).suggestions
          })
          .catch(error => console.log("error", error));
      }
    }

    const isInputFilled = computed(() => {
      return nameValue.value.trim().length >= 2
    })

    const cyrillicHint = computed(() => {
      if (isInputFilled.value) {
        if (isCyrillicSymbols.value) {
          return 'Это кириллица, всё ок'
        } else {
          return 'Это не кириллица, но DADATA преобразует латиницу в кирилицу, поэтому ок.'
        }
      } else {
        return ''
      }
    })

    watch(nameValue, () => {
      if (isInputFilled.value) {
        sendRequest()
      }

      if (/[^a-zA-Z]/.test(nameValue.value.trim())) {
        isCyrillicSymbols.value = true
      } else if (/\d/.test(nameValue.value.trim())) {
        isCyrillicSymbols.value = false
      } else {
        isCyrillicSymbols.value = false
      }
    })

    // Switch the autosearch flag
    watch(allowSearchFlag, () => {
      if (!allowSearchFlag.value === true && isInputFilled.value) {
        sendRequest()
      }
    });

    return {
      addedList,
      nameValue,
      cyrillicHint,
      responseData,
      isInputFilled,
      isCyrillicSymbols,
      allowSearchFlag,
    }
  }
}
</script>


<style scoped>
.title {
  @apply text-lg;
}

.name-finder {
  @apply m-auto flex justify-center items-center;
}
.name-finder-inner {
  @apply relative border px-4 py-3 flex flex-col justify-center items-center;
}

.search-input {
  @apply text-base w-full h-8 my-4 p-0 border-0 outline-none border-b-2;
}

.finder {
  @apply mb-8 w-full;
}

.list {
  @apply w-60 m-0 py-4 px-4 pl-0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

  .list_fetched {
    max-height: 350px;
    overflow: auto;
  }

  .list_added {
    max-height: 350px;
    overflow: auto;
  }

.hint {
  bottom: calc(100% + 5px);
  right: 0px;
  position: absolute;
  font-size: 12px;
  color: #84A59D;
  letter-spacing: 0.4px;
  line-height: 1.2;
}
</style>

