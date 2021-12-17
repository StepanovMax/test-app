<script>
import {
  inject,
} from 'vue';

export default {
  name: 'ListItem',
  props: {
    type: {
      type: String,
      default: 'add',
      validator: v => !v || /add|remove/.test(v),
    },
    item: {
      type: Object,
      default: {},
    },
  },
  setup () {
    const addedList = inject('addedList')

    const addItem = item => {
      // If index is -1 equal to no such items in array before
      if (getIndex(addedList, item) < 0) {
        addedList.push(item)
      }
    }

    const removeItem = item => {
      const index = getIndex(addedList, item)
      const removedItem = addedList.splice(index, 1);
    }

    const getIndex = (list, item) => {
      const index = list.findIndex(obj => {
        return obj.value === item.value
      })
      return index
    }

    return {
      addItem,
      removeItem,
    }
  },
}
</script>

<template>
  <div class="list-item-wrap">
    <span class="list-item-text">
      {{ item.value }}
    </span>
    <button
      type="button"
      @click="type === 'add' ? addItem(item) : removeItem(item)"
      class="button button_add"
    >
      {{ type === 'add' ? 'Add' : 'Remove' }} item
    </button>
  </div>
</template>

<style scoped>
.list-item-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
