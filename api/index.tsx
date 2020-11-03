
import {API_ROOT} from '../utils/constants';


export function fetchApi(url, method, params = {}, extraHeaders) {
    const fetchParams = {
        method,
        body: '',
        headers: {
            "Content-Type": "application/json",
        }
    }
    if (extraHeaders) {
        Object.keys(extraHeaders).forEach((key) => {
            fetchParams.headers[key] = extraHeaders[key]
        })
    }
    if (method !== 'GET') {
        fetchParams.body = JSON.stringify(params);
    } else {
        delete fetchParams.body;
    }
    
    return fetch(`${API_ROOT}${url}`, fetchParams).then(async (res) => {
        const json = await res.json();
        return json
    }).catch((error) => {
        return {
            error
        }
    })
}
