<template>
  <div class="category-list">
    <ul class="category-list">
      <li v-for="category in categories" v-bind:key="category.url">
        <router-link :to="{ name: 'category', params: { id: category.name }}">{{ category.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import reqwest from 'reqwest'

export default {
  name: 'CategoryList',
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  methods: {
    fetchData() {
      retrieveCategories((err, categories) => {
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

function retrieveCategories(callback) {
  reqwest({
      url: 'http://localhost:3000/products/categories'
    , type: 'json'
    , method: 'get'
    , error: function (err) {
      callback(err);
    }
    , success: function (resp) {
      callback(null, resp.categories);
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
