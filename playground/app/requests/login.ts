import { profileRequestController } from 'lib/index';

interface LoginResponse {
  result: {
    success: true,
  },
  token: string,
}

const loginRequest = profileRequestController(async ({ api, data }) => {
  try {
    const res = await api.post<{}, LoginResponse>('auth/login', data);

    return {
      data: {
        token: res.token,
        user: {},
        role: '',
      },
    };
  } catch (e) {
    return { error: 'Error' };
  }
});

export default loginRequest;
