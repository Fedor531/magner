import api from 'settings/utils/api';
import dataToProxy, { Response, Proxy } from 'app/proxies/login';
import type { BaseResponse } from 'settings/types/utils';

const profileRequest = async (): Promise<BaseResponse<Proxy>> => {
  try {
    const res: Response = await api.get('auth/profile');
    const proxied = dataToProxy(res);

    return { error: null, data: proxied };
  } catch (e) {
    return { error: 'Error', data: null };
  }
};

export default profileRequest;