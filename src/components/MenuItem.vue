<template>
  <router-link
    tag="li"
    class="at-menu-item"
    active-class="--active"
    exact-active-class="--exact-active"
    :class="classes"
    :to="to">
    <a class="at-menu-item-link">
      <icon class="at-menu-item-link-icon" v-if="icon" :name="icon"/> {{ title }}
    </a>

    <ul
      class="at-submenu-list"
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
    classes () {
      return {
          '--has-submenus': this.$slots.default
      }
    }
  }
}
</script>
