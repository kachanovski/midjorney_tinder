export const JWTToken = {
  getAccess() {
    return sessionStorage.getItem('access_token') ?? localStorage.getItem('access_token')
  },
  getRefresh() {
    return sessionStorage.getItem('refresh_token') ?? localStorage.getItem('refresh_token')
  },
  setTokens(access: string, refresh: string, type: 'session' | 'local' = 'session') {
    if (type === 'session' || sessionStorage.getItem('refresh_token')) {
      sessionStorage.setItem('access_token', access)
      sessionStorage.setItem('refresh_token', refresh)
    }
    if (type === 'local' || localStorage.getItem('refresh_token')) {
      localStorage.setItem('access_token', access)
      localStorage.setItem('refresh_token', refresh)
    }
  },
  removeTokens() {
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('refresh_token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  },
}
