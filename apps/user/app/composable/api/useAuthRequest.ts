import type { ApiResponse } from '~/types/ApiResponse'
import type { LoginPayload, LoginResponse } from '~/types/auth/Login'
import type { RegisterPayload, RegisterResponse } from '~/types/auth/Register'
import { useRequest } from '../useRequest'

export function useAuth() {
  const { apiFetch } = useRequest()

  // Login
  const login = (payload: LoginPayload) => {
    return apiFetch<ApiResponse<LoginResponse>>('/admin/login', {
      method: 'POST',
      body: payload,
    })
  }

  // Register
  const register = (payload: RegisterPayload) => {
    return apiFetch<ApiResponse<RegisterResponse>>('/admin/register', {
      method: 'POST',
      body: payload,
    })
  }

  // Logout (one-time action, gunakan $fetch)
  const logout = () => {
    return apiFetch('/admin/logout', {
      method: 'POST',
    })
  }

  return {
    login,
    register,
    logout,
  }
}