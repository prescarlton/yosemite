import axios, { AxiosResponse } from 'axios'

import querify from '@/utils/querify'

export function getStrapiURL(path: string) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchStrapi<T>(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
    },
    ...options,
  }

  // Build request URL
  const queryString = querify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`

  // Trigger API call
  return axios.request<T>({ url: requestUrl, ...mergedOptions })
}
