<template>
  <i :class="classes"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      required: true,
      type: String
    },
    rotate: Boolean
  },
  computed: {
    classes: function() {
      return [
        'at-icon',
        'fa',
        `fa-${this.name}`,
        this.rotate ? 'fa-spin' : null
      ]
    }
  }
}
</script>
