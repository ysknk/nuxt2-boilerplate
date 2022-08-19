<template lang="pug">
  #app
    TheHeader

    main(:class=`$store.state.prefix + 'main'`)
      transition(name="page")
        nuxt

    TheFooter
</template>

<script>
import TheHeader from '~/components/common/TheHeader.vue'
import TheFooter from '~/components/common/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted () {
    this.setUaClass()
  },
  methods: {
    setUaClass () {
      const html = document.querySelector('html')
      const ua = this.$ua
      const prefix = `ua-type-`

      if (ua.isFromPc()) {
        html.classList.add(`${prefix}pc`)
      }
      if (ua.isFromTablet()) {
        html.classList.add(`${prefix}tab`)
      } else if (ua.isFromSmartphone()) {
        html.classList.add(`${prefix}sp`)
      }
    }
  }
}
</script>

<style lang="stylus">
// NOTE: reset
global-reset()
reset-html5()

html
  reset-font()
  reset-body()

// NOTE: origin
html
  font-family $font_family

  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  -webkit-text-size-adjust 100%

  -webkit-print-color-adjust exact

  font-feature-settings 'palt' 1

  // font-size ($fsd)px

  // NOTE: fontsize responsive
  font-size (($fsd / ($wpc)) * 100)vw
  @media (max-width: unit($wsp, 'px'))
    font-size (($fsp / ($wsp)) * 100)vw
  @media (min-width: unit($wpc, 'px'))
    font-size ($fsd)px !important

body
  line-height $lh
  color $font_color_default

  width 100%
  min-width ($wmin)px

  .{$p}display-inline-block
    display inline-block

  +break_point('pc')
    .{$p}display-none
      &-pc
        display none !important

  +break_point('tab')
    .{$p}display-none
      &-tab
        display none !important

  +break_point('sp')
    .{$p}display-none
      &-sp
        display none !important

a
  link_style('', '', '', '')

img
  max-width 100%
  width 100%
  height auto
  vertical-align top

picture
  max-width 100%

// NOTE: page transition
.page-enter
  opacity 0

.page-enter-active
  transition opacity 2s ease
</style>
