/**
 * @module utils/axios
 */

import axios from 'axios';
import API_URL from '@/config/urls';
import Cookies from 'js-cookie';

// import * as routerHelperUtils from "@/utils/routerHelper";
// import * as authDuck from '@/ducks/auth';
// import url from "@/config/url";

// Default request headers
const defaultHeaders = {
  'Accept-Language': 'uk',
  'X-CSRFToken': Cookies.get('csrftoken') || '',
};

/**
 * Generate headers for request
 * @param {boolean} useAuth - is use Authorization header
 * @return {Object}
 */
function getHeaders() {
  const headers = {
    ...defaultHeaders,
  };
  return headers;
}

/**
 * Generate request config
 * @param {Object} cfg
 * @return {Object}
 */
function getConfig(cfg = {}) {
  return {
    baseURL: API_URL,
    ...cfg,
    headers: {
      ...cfg.headers,
      ...getHeaders(),
    },
  };
}


/**
 * Request handler
 * @param {Object} cfg
 * @return {Promise<any>}
 */
function request(cfg = {}) {
  return new Promise((res, rej) => {
    axios(getConfig(cfg))
      .then((result) => res(result))
      .catch((e) => {
        if (e.response && e.response.status === 401) {
          // refreshToken()
          //   .then(() => {
          //     axios(getConfig(cfg))
          //       .then((response) => res(response))
          //       .catch((e) => rej(e));
          //   })
          //   .catch((e) => rej(e));
        } else {
          rej(e);
        }
      });
  });
}

/**
 * Make GET request
 * @param {string} url
 * @param {Object} query
 * @param {boolean} useAuth
 * @return {Promise<any>}
 */
export function get(url, query = {}, useAuth = false) {
  return request({
    method: 'get',
    url,
    params: query,
    useAuth,
  });
}

/**
 * Make POST request
 * @param {string} url
 * @param {Object} data
 * @param {Object} query
 * @param {boolean} useAuth
 * @return {Promise<any>}
 */
export function post(url, data = {}, query = {}, useAuth = false) {
  return request({
    method: 'post',
    url,
    params: query,
    data,
    useAuth,
  });
}

/**
 * Make PUT request
 * @param {string} url
 * @param {Object} data
 * @param {Object} query
 * @param {boolean} useAuth
 * @return {Promise<any>}
 */
export function put(url, data = {}, query = {}, useAuth = false) {
  return request({
    method: 'put',
    url,
    params: query,
    data,
    useAuth,
  });
}

/**
 * Make DELETE request
 * @param {string} url
 * @param {Object} data
 * @param {Object} query
 * @param {boolean} useAuth
 * @return {Promise<any>}
 */
export function del(url, data = {}, query = {}, useAuth = false) {
  return request({
    method: 'delete',
    url,
    params: query,
    data,
    useAuth,
  });
}
