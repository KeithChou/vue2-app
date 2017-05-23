<template>
  <div id="app">
    <headers></headers>
    <div class="nav">
      <router-link to="/good">商品</router-link>
      <router-link to="/rating">评价</router-link>
      <router-link to="/seller">卖家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import headers from './components/header/header';

  export default {
    components: {
      headers: headers
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
