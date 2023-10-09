import router from '../../router';
import { httpService } from '../../services/httpservice';

const state = {
  vendorDetails: [],
  loader: false,
};

const mutations = {
  setVendorDetails(state: any, payload: any) {
    state.vendorDetails = payload;
  },
  setLoader(state: any, payload: any) {
    state.loader = payload;
  },
};

const actions = {
  async getVendorData({ commit, dispatch }: any, payload: any) {
    commit('setLoader', true);
    await httpService
      .getDetails()
      .then(
        (resp) => {
          if (
            resp.status == 200 &&
            resp.data.message == 'Success' &&
            resp.data.status == 'Ok' &&
            resp.data.result.length > 0
          ) {
            commit('setVendorDetails', resp.data.result);
          } else {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: 'Failed',
                  type: 'danger',
                  message: resp.data.message,
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
          }

          payload == 'naviGate' ? router.push('/home') : '';
        },
        (err) => {
          dispatch('errorHandle/checkRouter', err, { root: true });
        }
      )
      .finally(() => {
        commit('setIsCalled', true, { root: true });
        commit('setLoader', false);
      });
  },
  createApp({ dispatch }: any, payload: any) {
    httpService
      .insetApp(payload)
      .then(
        async (resp) => {
          if (
            resp.status == 200 &&
            resp.data.message == 'Success' &&
            resp.data.status == 'Ok'
          ) {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: resp.data.message,
                  type: 'success',
                  message: 'Create App Successfully',
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
            router.push('/home');
          } else {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: 'Failed',
                  type: 'danger',
                  message: resp.data.message,
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
          }
        },
        (err) => {
          dispatch('errorHandle/checkRouter', err, { root: true });
        }
      )
      .finally(() => {});
  },
  updateApp({ dispatch }: any, payload: any) {
    httpService
      .updateApp(payload)
      .then(
        async (resp) => {
          if (
            resp.status == 200 &&
            resp.data.message == 'Success' &&
            resp.data.status == 'Ok'
          ) {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: resp.data.message,
                  type: 'success',
                  message: 'Update App Successfully',
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
            router.push('/home');
          } else {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: 'Failed',
                  type: 'danger',
                  message: resp.data.message,
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
          }
        },
        (err) => {
          dispatch('errorHandle/checkRouter', err, { root: true });
        }
      )
      .finally(() => {});
  },
  resetApp({ dispatch }: any, payload: any) {
    httpService
      .resetApp(payload)
      .then(
        async (resp) => {
          if (
            resp.status == 200 &&
            resp.data.message == 'Success' &&
            resp.data.status == 'Ok'
          ) {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: resp.data.message,
                  type: 'success',
                  message: 'Regenerate Api Key Successfully',
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
            router.push('/home');
          } else {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: 'Failed',
                  type: 'danger',
                  message: resp.data.message,
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
          }
        },
        (err) => {
          dispatch('errorHandle/checkRouter', err, { root: true });
        }
      )
      .finally(() => {});
  },
  deleteApp({ dispatch }: any, payload: any) {
    httpService
      .deleteApp(payload)
      .then(
        async (resp) => {
          if (
            resp.status == 200 &&
            resp.data.message == 'Success' &&
            resp.data.status == 'Ok'
          ) {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: resp.data.message,
                  type: 'success',
                  message: 'App Delete Successfully',
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
            router.push('/home');
          } else {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: 'Failed',
                  type: 'danger',
                  message: resp.data.message,
                  duration: 4500,
                },
                position: '',
              },
              { root: true }
            );
          }
        },
        (err) => {
          dispatch('errorHandle/checkRouter', err, { root: true });
        }
      )
      .finally(() => {});
  },
};

const getters = {};

const vendor = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters,
};

export default vendor;
