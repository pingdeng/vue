<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){
    this.initMethod();
  },
  methods:{
    initMethod(){
      /**
       * 向路由中添加对应的path 地址
       * path 地址会在配置的路由中找出对应的path进行跳转
       */
      return this.$router.push({ path: '/head', query: { from: vm.$router.currentRoute.path } });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
