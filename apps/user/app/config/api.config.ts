export const API_CONFIG = {
  baseURL: 'https://k44ow8kcs8cwk0c0wkcosk8g.tomodigicreative.com',
  timeout: 10000,
}

// Helper untuk default fetch options
export const defaultFetchOptions = {
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
}