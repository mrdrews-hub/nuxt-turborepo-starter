import type { ApiResponse } from '~/types/ApiResponse'
import type { ProfileResponse } from '~/types/profile/Profile'
import { useRequest } from '../useRequest'

export function useProfile() {
  const { apiFetch } = useRequest()

  const getProfile = () => {
    return useAsyncData<ApiResponse<ProfileResponse>>('profile', () => apiFetch('/profile'))
  }

  return {
    getProfile,
  }
}