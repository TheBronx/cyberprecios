import reqwest from 'reqwest'

const host = 'http://localhost:3000';

function getCategories(callback) {
  reqwest({
      url: host + '/products/categories'
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

function getCategory(category, callback) {
  reqwest({
      url: host + '/products/categories/' + category.replace(/\//g, '%2F')
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

function getProduct(productId, callback) {
  reqwest({
      url: host + '/products/' + productId
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

export default {
  getCategories: getCategories,
  getCategory: getCategory,
  getProduct: getProduct
}
