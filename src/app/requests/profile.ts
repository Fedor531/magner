import { dataToProxy, Response, Proxy } from 'app/requests/login';
import type { BaseResponse } from 'core/types/utils';
import api from 'core/utils/api';

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
