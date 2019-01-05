<template>
  <button
    class="at-button"
    type="submit">
    <at-icon
      class="at-button-icon"
      v-if="showIcon"
      :rotate="loading"
      :name="_icon"/>

    <span class="at-button-title">{{ _title }}</span>
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: String,
    title: String,
    loading: Boolean,
    loadingIcon: {
      type: String,
      default: 'circle-o-notch'
    },
    loadingText: String
  },
  computed: {
    showIcon() {
      return this.icon || this.loading
    },
    _icon() {
      return this.loading ? this.loadingIcon : this.icon
    },
    _title() {
      return (this.loading && this.loadingText) ? this.loadingText : this.title
    }
  }
}
</script>
