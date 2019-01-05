<template>

  <div class="at-card" :class="classes">

    <header class="at-card-header" v-if="headerHasContent">

      <slot name="header"/>

      <at-icon class="at-card-header-icon" v-if="icon" :name="icon"/>

      <div class="at-card-header-title">
        <span v-if="title">{{ title }}</span>

        <slot name="title"/>
      </div>

      <div class="at-card-extra" v-if="$slots['header-extra']">
        <slot name="header-extra"/>
      </div>

    </header>

    <div class="at-card-body" :style="bodyStyle">

      <slot v-if="!loading"></slot>
      <slot v-else name="loading">
        <div class="at-card-body --loading">
          <div>
            <span style="width: 95%"></span>
          </div>
          <div>
            <span style="width: 32%"></span>
            <span style="width: 58%"></span>
          </div>
          <div>
            <span style="width: 23%"></span>
            <span style="width: 65%"></span>
          </div>
          <div>
            <span style="width: 59%"></span>
            <span style="width: 32%"></span>
          </div>
          <div>
            <span style="width: 26%"></span>
            <span style="width: 10%"></span>
            <span style="width: 50%"></span>
          </div>
        </div>
      </slot>

    </div>

    <footer class="at-card-footer" v-if="footer || $slots.footer || $slots['footer-extra']">

      <small>

        <div class="at-card__footer__title">
          <span v-if="footer">{{ footer }}</span>

          <slot name="footer"></slot>
        </div>

        <div class="at-card__extra" v-if="$slots['footer-extra']">
          <slot name="footer-extra"></slot>
        </div>

        <div v-if="$slots['footer-extra']" class="clearfix"></div>

      </small>

    </footer>

  </div>

</template>

<script>
export default {
  name: 'Card',
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    noHover: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    bodyStyle: {
      type: Object
    },
    title: String,
    footer: String,
    icon: String
  },
  computed: {
    headerHasContent() {
      return (this.title || this.icon || this.$slots.header || this.$slots['header-extra'])
    },
    classes() {
      return {
        '--bordered': this.bordered,
        '--no-hover': this.noHover
      }
    }
  }
}
</script>
