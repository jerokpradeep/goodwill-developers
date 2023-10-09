import router from '../../router';
import { httpService } from '../../services/httpservice';
import { getUrl } from '../../services';
const state = {
  accessToken: '',
  userId: '',
};

const mutations = {
  setAuthToken(state: any, payload: any) {
    state.accessToken = payload;
    localStorage.setItem('accessToken', JSON.stringify(payload));
  },
  setUserId(state: any, payload: any) {
    state.userId = payload;
    localStorage.setItem('userId', JSON.stringify(payload));
  },
};

const actions = {
  getAuthSession({ commit, dispatch, rootGetters }: any) {
    let json = {
      vendor: rootGetters['getQuery'].appcode,
      authCode: rootGetters['getQuery'].authCode,
    };
    httpService
      .getSession(json)
      .then(
        (resp) => {
          if (resp.status == 200 && resp.data.stat == 'Ok') {
            commit('setUserId', resp.data.clientId);
            commit('setAuthToken', resp.data.userSession);
            commit('setIsCalled', false, { root: true });
            router.push('/home');
          } else {
            dispatch(
              'errorHandle/toaster',
              {
                data: {
                  title: 'Failed',
                  type: 'danger',
                  message: 'unhandled error',
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
  naviGateWeb() {
    window.open(`${getUrl().BASEURL}?appcode=${getUrl().appcode}`, '_self');
  },
};

const getters = {};

const auth = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default auth;
