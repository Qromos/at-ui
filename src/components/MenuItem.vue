<template>
  <router-link
    tag="li"
    class="at-menu-item"
    active-class="--active"
    exact-active-class="--exact-active"
    :class="classes"
    :to="to">
    <a class="at-menu-item-link">
      <icon v-if="icon" :name="icon"/> {{ title }}
    </a>

    <ul
      class="at-menu-list --submenu"
      v-if="$slots.default">
      <slot/>
    </ul>
  </router-link>
</template>

<script>

import Icon from './Commons/Icon.vue'

export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String
    },
    title: String,
    to: {
      required: true,
      type: [String, Object],
    }
  },
  components: {
    Icon
  },
  computed: {
    classes: function () {
      return [
        this.$slots.default ? '--has-submenus' : null
      ]
    }
  }
}
</script>
