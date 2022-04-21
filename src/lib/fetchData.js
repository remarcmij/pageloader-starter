/**
 * This file is provided ready-made for use in your application by HackYourFuture.
 * There should be no reason to make any changes to this file.
 */

import logger from './logger.js';

const HTTP_STATUS_NO_CONTENT = 204;
const cache = new Map();

/**
 * Fetch data using an HTTP GET request and optionally cache the response.
 * @param {string} url The url to fetch from.
 */
async function fetchData(url, options = {}) {
  let data;

  if (options.cache) {
    data = cache.get(url);
    if (data) {
      logger.silly('fetchData', 'cache hit:', url);
      return data;
    }
    logger.silly('fetchData', 'cache miss:', url);
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}  ${res.statusText}`);
  }

  if (res.status === HTTP_STATUS_NO_CONTENT) {
    data = null;
  } else {
    data = await res.json();
  }

  if (options.cache) {
    cache.set(url, data);
  }

  return data;
}

export default fetchData;
