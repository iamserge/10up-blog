import { fetchApi } from './index';
import { ENDPOINTS } from '../utils/constants';


export async function getAllPosts() {
    const { url, method } = ENDPOINTS.getAllPosts;
    const allPosts = await fetchApi(url, method, {}, {});
    return allPosts
}

export async function getPostBySlug(slug) {
    const { url, method } = ENDPOINTS.getPostBySlug;
    const allPosts = await fetchApi(url.replace('<slug>', slug), method, {}, {});
    return allPosts
}
