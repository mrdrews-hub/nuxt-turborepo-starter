declare module '#auth-utils' {
  interface User {
    token: string
    role?: string
    name: string
    email: string
  }

  interface UserSession {
    token: string
    role?: string
    name: string
    email: string
  }

  interface SecureSessionData {
    token: string
    role?: string
    name: string
    email: string
  }
}

export {}
