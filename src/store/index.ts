// look at this https://www.codeproject.com/Tips/5295301/Correctly-Typing-Vuex-with-TypeScript
import {
  createStore
} from "vuex";

// import modules
import auth from "./modules/auth.ts";
import errorHandle from "./handle/errorhandling.ts";
import vendor from "./modules/vendor.ts";


export const store = createStore({
  state: {
    query: '',
    isCalled: false,
    buildDate:'22_07_2023_20_25',
    openMenu: false,
    logoutCondition: false,

    localItems: [
      "developerUserId",
      "developerAccessToken"
    ],
  },
  mutations: {
    setQuery(state: any, payload: any){
      state.query = payload
    },
    setIsCalled(state: any, payload: any){
      state.isCalled = payload
    },
    setOpenMenu(state: any, payload: any){
      state.openMenu = payload
    },
    setLogoutCondition(state: any, payload: any) {
      state.logoutCondition = payload;
    },
  },
  actions: {},
  getters: {
    getQuery:(state:any)=> state.query
  },
  modules: { 
    auth,errorHandle,vendor
  },
});

