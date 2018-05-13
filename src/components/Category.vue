<template>
  <div class="category">
    <div class="container">
      <div class="row">
        <div v-for="product in products" v-bind:key="product.id" class="col-md-3 col-sm-6">

          <div class="card">
            <img class="card-img-top" src="../assets/product-default.jpg" alt="product.title">
            <div class="card-body">
              <p class="card-text">{{ product.title }}</p>
              <router-link :to="{ name: 'product', params: { id: product.id }}" class="btn btn-primary">Ver</router-link>
            </div>
          </div>

        </div>
        <div class="w-100 d-none d-md-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
import reqwest from 'reqwest'

export default {
  name: 'Category',
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      var category = this.$route.params.id;
      retrieveProducts(category, (err, products) => {
        if (err) return console.log(err);

        this.products = products;
      });
    }
  },
  data: function() {
    return {
      error: null,
      products: []
    }
  }
};

function retrieveProducts(category, callback) {
  reqwest({
      url: 'http://localhost:3000/products/categories/' + category
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
.category .card {
  margin-bottom: 20px;
}
</style>
