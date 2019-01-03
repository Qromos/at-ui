<template>
  <nav class="at-menu" :class="classes">
    <slot name="brand"/>

    <ul class="at-menu-list">
      <slot/>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    orientation: {
      type: String,
      default: 'vertical'
    },
    fill: Boolean
  },
  computed: {
    classes: function () {
      return [
        this.fill ? '--fill' : null,
        this.orientation === 'horizontal' ? '--horizontal' : '--vertical'
      ]
    }
  }
}
</script>
