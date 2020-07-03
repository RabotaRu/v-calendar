import Vue from 'vue';
import VueCalendar from './lib';


Vue.use(VueCalendar, {
  locale: 'ru'
});

/* eslint-disable */
new Vue({
  el: '#app',
  template: `
  <div>
    <v-calendar >
      <template #header-left-button><<</template>
      <template #pane-bottom> Bottom pane</template>
    </v-calendar>
  </div>`
  // render: h =>
  //   h('div', [h('h1', 'Заголовок'), h('v-calendar',
  //   // {props: {locale: 'ru'}}
  //   )
  // ])
});
