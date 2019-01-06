<template>
  <label
  class="at-checkbox"
  :class="classes">
    <span class="at-checkbox__icon__wrapper">
      <at-icon
        class="at-checkbox__icon"
        name="check"
        v-show="currentValue"/>
    </span>

    <input
      class="at-checkbox__input"
      type="checkbox"
      v-bind="$attrs"
      :checked="currentValue"
      @change="updateModel">

      {{ label }}
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    checked: Boolean,
    label: String
  },
  data() {
    return {
      currentValue: false
    }
  },
  computed: {
    classes() {
      return {
        '--checked': this.currentValue
      }
    }
  },
  methods: {
    updateModel(e) {
      this.currentValue = e.target.checked

      this.$emit('change', this.currentValue)
    }
  }
}
</script>
