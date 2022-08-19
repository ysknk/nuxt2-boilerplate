<template lang="pug">
  .container
    div
      h1.title!= process.env.npm_package_name
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
.container
  // NOTE: nib test
  relative top 0 left 0
</style>
