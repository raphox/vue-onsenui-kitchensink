import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';
import CustomToolbar from './partials/CustomToolbar.vue';
import storeLike from './store.js';
import AppNavigator from './AppNavigator.vue';
// Onsen UI basic CSS
import 'onsenui/css/onsenui.css';
// Onsen UI CSS components source (requires cssnext)
import 'onsenui/css/onsen-css-components.css';

Vue.use(Vuex);
Vue.use(VueOnsen);
Vue.component('custom-toolbar', CustomToolbar); // Common toolbar

new Vue({
  el: '#app',
  render: h => h(AppNavigator),
  store: new Vuex.Store(storeLike)
});
