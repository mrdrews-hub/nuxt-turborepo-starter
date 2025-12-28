import type { ApiResponse } from '~/types/ApiResponse'
import type { LoginResponse } from '~/types/auth/Login'
import { API_CONFIG } from '~/config/api.config'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const response = await $fetch<ApiResponse<LoginResponse>>(`${API_CONFIG.baseURL}/admin/login`, {
      method: 'POST',
      body,
    })

    await setUserSession(event, {
      name: response.data?.user?.name,
      email: response.data?.user?.email,
      token: response.data.token,
    })

    return { success: true }
  }
  catch (error: any) {
    const apiError = error?.data
    const errorMessage = apiError?.error
      || apiError?.message
      || 'Login failed'

    const statusCode = error?.statusCode || 401

    throw createError({
      statusCode,
      statusMessage: 'Unauthorized',
      data: {
        message: errorMessage,
        code: statusCode,
      },
    })
  }
})