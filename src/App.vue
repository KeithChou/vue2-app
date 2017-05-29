<template>
  <div id="app">
    <headers :seller=seller></headers>
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
    created () {
      this.$http.get('./api/seller')
      .then((res) => {
        let response = res.body;
        if (response.errno === 0) {
          this.seller = response.data;
        }
      })
    },
    components: {
      headers: headers
    },
    data () {
      return {
        seller: {}
      }
    }
  }
</script>

<style lang="sass">
  @import "./common/sass/page";
</style>
