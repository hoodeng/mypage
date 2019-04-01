<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: "App",
};
</script>

<style lang='less'>
@import "./style/common";
// #app {
//   height: 100%;
//   width: 100%;
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   // margin-top: 60px;
// }
</style>
