<script lang="ts">
export default {
  name: 'base-radio',
  props: {
    option: {
      type: Object,
      default: {},
    },
    optionIndex: {
      type: Number,
      default: 0,
    },
    groupName: {
      type: String,
      default: '',
    },
  },
}
</script>


<template>
  <div
    class="form-check"
  >
    <input
      type="radio"
      :name="groupName"
      class="form-check-input"
      :id="`radio-${groupName}-${optionIndex}`"
      :value="option"
      :checked="option.checked"
      @change="$emit('pick', option)"
    >
    <label
      class="form-check-label"
      :for="`radio-${groupName}-${optionIndex}`"
    >
      {{ option.title }}
    </label>
  </div>
</template>