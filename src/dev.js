import Vue from 'vue';
import VueCalendar from './lib';


Vue.use(VueCalendar, {
  locale: 'ru'
});

/* eslint-disable */
new Vue({
  el: '#app',
  data: () => ({date: null}),
  computed: {
    attributes() {
      return [
        {
          key: 'deffered',
          highlight: {
            backgroundColor: 'rgba(237, 243, 250, 0.5)',
            fillMode: 'light'
          },
          dates: {
            start: new Date('08.16.2020'),
            end: new Date('08.20.2020')
          },
        }
      ]
    },
  },
  template: `
  <div>
    <v-date-picker is-inline v-model="date" :attributes="attributes">
      <template #header-left-button><<</template>
      <template #pane-bottom> Bottom pane</template>
    </v-date-picker>
  </div>`
});
