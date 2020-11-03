import { fetchApi } from './index';
import { ENDPOINTS } from '../utils/constants';

export async function getAllPages() {
    const { url, method } = ENDPOINTS.getAllPages;

    const allPages = await fetchApi(url, method, {}, {});
    return allPages;
}

export async function getPageBySlug(slug) {
    const { url, method } = ENDPOINTS.getPageBySlug;

    const page = await fetchApi(url.replace('<slug>',slug), method, {}, {});
    return page;
}