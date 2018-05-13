<template>
  <div class="product-detail">
    <h1>{{ product.title }}</h1>
    <h3>{{ product.category }}</h3>
    {{ product }}
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
