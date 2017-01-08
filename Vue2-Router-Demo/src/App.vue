<template lang="pug">
  .app
    header
      //- 制作一个跳转链接
      //- 这里不要直接用a链接跳转，那样会导致页面重载，
      //- 相比之下用router-link是高效的方案
      //- to属性就是链接的地址啦
      router-link(to="/") home
      router-link(to="/article") article
    bodyer
      //- 路由地址所对应的模板将会被挂载到router-view标签上
      router-view
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<style lang="stylus">
</style>
