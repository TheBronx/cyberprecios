<template>
  <div class="category-list">
    <div class="container">
      <div class="row">
        <div v-for="category in categories" v-bind:key="category.url" class="col-md-3 col-sm-6">
          <router-link :to="{ name: 'category', params: { id: category.name }}">{{ category.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../Api.js'

export default {
  name: 'CategoryList',
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  methods: {
    fetchData() {
      api.getCategories((err, categories) => {
        if (err) return console.log(err);

        categories = categories.map(cat => {
          return {
            url: escape(cat),
            name: cat
          };
        });
        this.categories = categories;
      });
    }
  },
  data: function() {
    return {
      error: null,
      categories: []
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
