import { createApp,defineComponent, ref } from "vue";
import Notification from "./Notification.vue";
// Track all instances of notifications currently open
const notificationState : any =ref([]);
const position : any =ref("top-right")
// Set default values
const durationDefault = 4500;
const typeDefault = "primary";

// Create a new notification
const app = defineComponent({
  extends: Notification,
  data() {
    return {notificationState ,position }
  },
  methods:{
    // Remove the notification from state
 closeNotification(key: any) {
  const index = notificationState.value.findIndex((n: any) => key === n.key);
  clearTimeout(notificationState.value[index]._timer);
  notificationState.value.splice(index, 1);
}
  },
})

const notificationContainer = document.createElement("div");
notificationContainer.id = "notification-container";
document.body.appendChild(notificationContainer);
createApp(app).mount(notificationContainer)
function newNotification(args: any, where:string) {
  
  if (typeof args === "string") {
    args = {
      message: args,
    };
  }
  args.key = args.key || new Date().getTime();
  args.duration = args.duration || durationDefault;
  args.type = args.type || typeDefault;
  args._timer = setTimer(args.key, args.duration);
  where ? position.value = where : ''
  notificationState.value.push(args) 
  
}

// Set a timer to kill the notification after the specified duration
function setTimer(key: any, duration: any) {
  return setTimeout(() => {
    closeNotificationtest(key);
  }, duration);
}
function closeNotificationtest(key: any) {
  const index = notificationState.value.findIndex((n: any) => key === n.key);
  clearTimeout(notificationState.value[index]._timer);
  notificationState.value.splice(index, 1);
}



const api = {
  open: newNotification
};

export default api;
