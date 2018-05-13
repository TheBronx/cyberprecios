<template>
  <div class="product-detail">
    <h1>{{ product.title }}</h1>
    <h3>{{ product.category }}</h3>
    {{ product }}
  </div>
</template>

<script>
import reqwest from 'reqwest'

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
      retrieveProduct(productId, (err, product) => {
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

function retrieveProduct(productId, callback) {
  reqwest({
      url: 'http://localhost:3000/products/' + productId
    , type: 'json'
    , method: 'get'
    , error: function (err) {
      callback(err);
    }
    , success: function (resp) {
      callback(null, resp);
    }
  })
}
</script>

<style scoped>
</style>
