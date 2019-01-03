<template>
  <i :class="classes"></i>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    }
  },
  computed: {
    classes: function() {
      return [
        'at-icon',
        'fe',
        `fe-${this.name}`
      ]
    }
  }
}
</script>
