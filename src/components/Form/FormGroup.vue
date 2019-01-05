<template>
  <div class="at-form-group" :class="classes">
    <label class="form-label" :for="this.for">{{ label }}</label>
    <slot/>
    <transition name="fade" mode="in-out">
      <span class="at-form-group-error-message" v-if="hasError">{{ firstError }}</span>
    </transition>
  </div>
</template>

<script>
import { mixin } from 'vuelidate-error-helper'

export default {
  name: 'FormGroup',
  mixins: [mixin],
  props: {
    label: String,
    for: String,
  },
  methods: {
    classes() {
      return [
        this.hasError ? '--has-error' : null
      ]
    },
  },
}
</script>
