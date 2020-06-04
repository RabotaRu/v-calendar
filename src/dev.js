import Vue from 'vue';
import VueCalendar from './lib';

Vue.use(VueCalendar);

/* eslint-disable */
new Vue({
  el: '#app',
  render: h =>
    h('div', [h('h1', 'Заголовок'), h('v-calendar')])
});