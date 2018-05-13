import Home from './components/Home.vue';
import Category from './components/Category.vue';
import ProductDetail from './components/ProductDetail.vue';

export default [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/category/:id', component: Category, name: 'category' },
  { path: '/product/:id', component: ProductDetail, name: 'product' }
];
