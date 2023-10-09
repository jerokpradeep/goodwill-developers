import { getUrl, resetAuthHeader } from './index.ts';
import axios from 'axios';

const AXIOS = axios.create({
  baseURL: getUrl().BASEURL,
});

export const httpService = {
  getSession,
  getDetails,
  insetApp,
  updateApp,
  deleteApp,
  resetApp,
};

function getSession(payload: Object) {
  return AXIOS.post(
    'auth/sso/vendor/auth/getUserDetails',
    payload,
    resetAuthHeader()
  );
}

function getDetails() {
  return AXIOS.get('sso/vendor/', resetAuthHeader());
}

function insetApp(payload: Object) {
  return AXIOS.post('sso/vendor/create', payload, resetAuthHeader());
}

function updateApp(payload: Object) {
  return AXIOS.post(`sso/vendor/update`, payload, resetAuthHeader());
}

function deleteApp(payload: Object) {
  return AXIOS.delete(`sso/vendor/delete/${payload}`, resetAuthHeader());
}
function resetApp(payload: Object) {
  return AXIOS.get(`sso/vendor/reset/${payload}`, resetAuthHeader());
}
