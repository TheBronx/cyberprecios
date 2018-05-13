<template>
  <div class="category">
    <div class="container">
      <div class="card-columns">
        <div v-for="product in products" v-bind:key="product.id" class="card">

          <img v-if="(!product.pictures || !product.pictures.length)" class="card-img-top" src="../assets/product-default.jpg" />
          <img v-else class="card-img-top" :src="product.pictures[0].url" :alt="product.title">
          <div class="card-body">
            <p class="card-text">{{ product.title }}</p>
            <router-link :to="{ name: 'product', params: { id: product.id }}" class="btn btn-primary">Ver</router-link>
          </div>

        </div>
        <div class="w-100 d-none d-md-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../Api.js'

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
      api.getCategory(category, (err, products) => {
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
</script>

<style scoped>
.category .card {
  margin-bottom: 20px;
}
</style>
