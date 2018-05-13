<template>
  <div class="product-detail">
    <h1>{{ product.title }}</h1>
    <h3>{{ product.category }}</h3>
    <img v-if="(!product.pictures || !product.pictures.length)" src="../assets/product-default.jpg" />
    <img v-else :src="product.pictures[0].url" :alt="product.title">

    <a :href="product.pccomponentesURL" target="_blank" rel=”nofollow” class="btn btn-warning">PcComponentes</a>
    <a :href="product.amazonURL" target="_blank" rel=”nofollow” class="btn btn-success">Amazon</a>
  </div>
</template>

<script>
import api from '../Api.js'

export default {
  name: 'ProductDetail',
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      var productId = this.$route.params.id;
      api.getProduct(productId, (err, product) => {
        if (err) return console.log(err);

        this.product = product;
      });
    }
  },
  data: function() {
    return {
      error: null,
      product: []
    }
  }
};
</script>

<style scoped>
</style>
