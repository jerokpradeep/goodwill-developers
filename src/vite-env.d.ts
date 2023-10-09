/// <reference types="vite/client" />
import {  store} from '. ./store'
import notification from '../notification/index.ts'
import formatter from '../mixins/formatter.ts'
import validator from './mixins/validator.ts'
import common from './mixins/common.ts'
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $store: store,
      $notification: notification,
    }
  }