import { fetchApi } from './index';
import { ENDPOINTS } from '../utils/constants';

export async function login(userData) {
    const { url, method } = ENDPOINTS.login;

    const response = await fetchApi(url, method, userData, {});

    return response;
}

export async function validateToken(token) {
    const { url, method } = ENDPOINTS.validateToken;

    const response = await fetchApi(url, method, {}, {
        "Authorization": `Bearer ${token}`
    });

    return response;
}


