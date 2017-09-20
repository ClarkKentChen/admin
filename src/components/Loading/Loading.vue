<template>
  <div class='loading'

    v-loading.fullscreen.lock="fullscreenLoading"
     element-loading-text="我在拼命加载中"
    >
    显示整页加载，3 秒后消失
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: true
      }
    },
    methods: {

    }
  }
</script>

<style>
.loading{
/* overflow-y: scroll !important; */
  position: relative;
}
</style>
