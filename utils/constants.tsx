export const API_ROOT = 'https://js1.10up.com/wp-json';
export const TOKEN_COOKIE = 'TOKEN';
export const USER_COOKIE = 'USERNAME';
export const ENDPOINTS = {
    getAllPosts: {
        url: '/wp/v2/posts',
        method: 'GET'
    },
    getPostBySlug: {
        url: '/wp/v2/posts?slug=<slug>',
        method: 'GET'
    },
    getAllPages: {
        url: '/wp/v2/pages',
        method: 'GET'
    },
    getPageBySlug: {
        url: '/wp/v2/pages?slug=<slug>',
        method: 'GET'
    },
    login: {
        url: '/jwt-auth/v1/token',
        method: 'POST'
    },
    validateToken: {
        url: '/jwt-auth/v1/token/validate',
        method: 'POST'
    },
};
