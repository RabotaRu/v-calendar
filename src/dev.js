import Vue from 'vue';
import VueCalendar from './lib';


Vue.use(VueCalendar, {
  locale: 'ru'
});

/* eslint-disable */
new Vue({
  el: '#app',
  data: () => ({date: null}),
  template: `
  <div>
    <v-date-picker is-inline mode="range" v-model="date">
      <template #header-left-button><<</template>
      <template #pane-bottom> Bottom pane</template>
    </v-date-picker>
  </div>`
  // render: h =>
  //   h('div', [h('h1', 'Заголовок'), h('v-calendar',
  //   // {props: {locale: 'ru'}}
  //   )
  // ])
});
