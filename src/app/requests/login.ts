import request from 'core/utils/request';
import ROLE from 'configs/roles';
import type { ProxyFunc } from 'core/types/utils';

interface User {
  id: number,
  login: string,
  phone: string,
}

export interface Response {
  result: {
    user: {
      id: number,
      login: string,
      phone: string,
      roleTitle: string,
      roles: ROLE[],
    },
  },
  token: string,
}

export interface Proxy {
  role: ROLE | null,
  token: string,
  user: User,
}

export const dataToProxy: ProxyFunc<Response, Proxy> = (data) => ({
  token: data.token,
  role: data.result.user.roles?.length ? data.result.user.roles[0] : null,
  user: data.result.user,
});

const loginRequest = request<true>(async ({
  data, store, api,
}) => {
  try {
    const res: Response = await api.post('auth/login', data);
    const proxied = dataToProxy(res);

    await store.dispatch('changeToken', proxied.token);
    await store.dispatch('changeUser', proxied.user);
    await store.dispatch('changeRole', proxied.role);
  } catch (e) {
    return { error: 'Error', data: null };
  }

  return { error: null, data: true };
});

export default loginRequest;
