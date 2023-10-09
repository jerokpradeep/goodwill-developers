let isLive = false;
import { store } from '../store';
export function getUrl() {
  return {
    BASEURL: isLive ? 'https://web.gwcindia.in/' : 'https://web.gwcindia.in/',
    appcode: 'nenHakuRWEvNved',
  };
}

export function resetAuthHeader() {
  let token: any = store.state.auth.accessToken;
  let headers: any;
  if (token) {
    headers = { Authorization: 'Bearer ' + token };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }

  return { headers: headers };
}
