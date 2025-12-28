import { API_CONFIG } from '~/config/api.config'

export function useRequest() {
  const { session } = useUserSession()

  const apiFetch = $fetch.create({
    baseURL: API_CONFIG.baseURL,

    onRequest({ options }) {
      if (session.value?.token) {
        options.headers.set('Authorization', `Bearer ${session.value.token}`)
      }
    },

    onResponseError({ response }) {
      // Handle unauthorized
      if (response.status === 401) {
        navigateTo('/auth/login')
      }
    },
  })

  return { apiFetch }
}