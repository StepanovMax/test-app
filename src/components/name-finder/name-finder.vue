<script lang="ts">
import {
  ref,
  watch,
  computed,
  provide,
} from 'vue';
import item from '@/components/name-finder/item.vue';

export default {
  name: 'name-finder',
  components: {
    item,
  },
  setup () {
    let x: string
    x = 'This is a string, not a bool'
    const nameValue = ref('' as string)
    const addedList = ref([])
    const responseData = ref(null)
    const isLatinSymbols = ref(null)
    const allowSearchFlag = ref(true)

    provide('addedList', addedList.value)

    // Switch the autosearch flag
    const runAutoSearch = () => {
      allowSearchFlag.value = !allowSearchFlag.value
      // Run the fetch if input the the query
      if (allowSearchFlag.value === true && isInputFilled.value) {
        sendRequest()
      }
    }

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

      if (allowSearchFlag.value) {
        fetch(url, options)
          .then(response => response.text())
          .then(result => {
            responseData.value = JSON.parse(result).suggestions
          })
          .catch(error => console.log("error", error));
      }
    }

    const isInputFilled = computed(() => {
      // nameValue.value = '123'
      return nameValue.value.trim().length >= 2
    })

    const cyrillicHint = computed(() => {
      if (isInputFilled.value) {
        if (isLatinSymbols.value) {
          return 'It\'s LATIN symbols, but the dadata we will make a convertation latin to cyrillic symbols'
        } else {
          return 'It\'s CYRILLIC symbols, it\'s OK'
        }
      } else {
        return ''
      }
    })

    watch(nameValue, () => {
      if (isInputFilled.value) {
        sendRequest()
      }

      if (!/[^a-zA-Z]/.test(nameValue.value.trim())) {
        isLatinSymbols.value = true
      } else {
        isLatinSymbols.value = false
      }
    });

    return {
      addedList,
      nameValue,
      cyrillicHint,
      responseData,
      isInputFilled,
      isLatinSymbols,
      allowSearchFlag,
      runAutoSearch,
    }
  }
}
</script>

<template>
  <div class="name-searcher">
    <div class="name-searcher">
      <header class="">
        <h1 class="font-semibold text-2xl">
          Name finder
        </h1>
      </header>

      <div class="">
        <input
          :placeholder="allowSearchFlag ? 'Type your name' : 'I don\'t care about your typing!'"
          type="text"
          class="search-input"
          v-model="nameValue"
        >
        <p class="hint">
          {{ cyrillicHint }}
        </p>
      </div>

      <div class="app-content">

        <h2 class="title">
          Queried list 2
        </h2>

        <ul class="list list_fetched">
          <li
            v-for="item in responseData"
            :key="item.value"
            class="list-item"
          >
            <item
              :item="item"
              type="add"
            />
          </li>
        </ul>

        <hr class="hr">

        <h2 class="title">
          Added list 2
        </h2>

        <ul class="list list_added">
          <li
            v-for="item in addedList"
            :key="item.value"
            class="list-item"
          >
            <item
              :item="item"
              type="remove"
            />
          </li>
        </ul>
      </div>

      <footer class="app-footer">
        <button
          type="button"
          @click="runAutoSearch"
          class="button button_footer"
          :class="allowSearchFlag ? 'button_footer-stop' : 'button_footer-allow'"
          title="Stop the search, please!"
        >
          {{ allowSearchFlag ? 'Stop' : 'Allow' }} autosearch
        </button>
      </footer>
    </div>
  </div>
</template>




<style scoped>
.name-searcher {
  @apply m-auto w-80 relative;
}

.search-input {
  height: 50px;
  width: 100%;
  font-size: 14px;
  padding: 0;
  border: 0;
  text-indent: 25px;
  outline: none;
}

.button {
  border: 0;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
}

.button_add {
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 600;
  color: #F7EDE2;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #f0b659;
}

.button_add:hover {
  background-color: #e6ae54;
}

.button_footer {
  width: 100%;
  height: 50px;
  color: #fff;
  font-weight: 500;
  padding: 10px 15px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.button_footer-stop {
  background-color: #F3722C;
}

  .button_footer-stop:hover {
    background-color: #e46b2b;
  }

.button_footer-allow {
  background-color: #90BE6D;
}

  .button_footer-allow:hover {
    background-color: #81ac61;
  }

.list {
  margin: 0;
  padding: 15px 15px 15px 0;
}

  .list_fetched {
    max-height: 300px;
    overflow: auto;
  }

  .list_added {
    max-height: 300px;
    overflow: auto;
  }

.list-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.list-item-text {
  color: #84A59D;
}

.hr {
  border: 0;
  padding: 0;
  height: 1px;
  margin: 1em 0;
  display: block;
  border-top: 1px solid #F5CAC3;
}

.hint {
  bottom: 87%;
  left: 25px;
  right: 25px;
  position: absolute;
  font-size: 12px;
  color: #84A59D;
  letter-spacing: 0.4px;
  line-height: 1.2;
}

.title {
  font-weight: 600;
  font-size: 18px;
}
</style>
