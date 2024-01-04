import { createApp } from 'vue'
import './style.css'
import './tailwind/index.css'
import App from './App.vue'
import router from './router/index.ts'
import {store} from './store'
import { default as notification } from "./notification/index.ts";
import VueClickAway from "vue3-click-away";
import VueTippy from 'vue-tippy';
import VueCryptojs from 'vue-cryptojs';
import directive from './directives/outsideClick.ts';

import 'tippy.js/dist/tippy.css' // optional for styling

const app = createApp(App).use(store).use(router).use(VueClickAway).use(VueCryptojs).use(
    VueTippy,
    // optional
    {
      directive: 'tippy', // => v-tippy
      component: 'tippy', // => <tippy/>
      componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
      defaultProps: {
        arrow: true,
        followCursor: false,
        inlinePositioning: false,
        placement: 'top',
        allowHTML: true,
        delay: [100, null],// show delay is 100ms, hide delay is 200ms
        duration: [100, null],// show duration is 100ms, hide duration is 200ms
        animateFill: false,
        animation: 'fade',
      }, // => Global default options * see all props
    }
  )
  app.config.globalProperties.$notification = notification

  app.directive('click-outside', directive);


app.mount('#app')
    