import Vue from 'vue'
import Router from 'vue-router'
import good from '../components/content/good';
import rating from '../components/content/rating';
import seller from '../components/content/seller';

Vue.use(Router);

const router = new Router({
  routes: [{
  	path: '/good',
  	component: good
  }, {
  	path: '/rating',
  	component: rating
  }, {
  	path: '/seller',
  	component: seller
  }]
});

router.push('/good');

export default router;
