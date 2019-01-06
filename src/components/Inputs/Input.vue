<template>
  <input
    class="at-input"
    type="text"
    v-model="value"
    @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: String
  }
}
</script>
