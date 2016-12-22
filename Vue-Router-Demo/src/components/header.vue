<template>
    <div>
        <header-component/>
        <div>this is head</div>
        <other-component/>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
export default {
  name: 'head',
  data () {
    return {
      msg: 'this is head'
    }
  }
}
</script>
