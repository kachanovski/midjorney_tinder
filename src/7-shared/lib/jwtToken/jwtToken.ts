export const JWTToken = {
  getAccess() {
    return localStorage.getItem('access_token')
  },
  setAccess(access_token: string) {
    localStorage.setItem('access_token', access_token)
  },
  removeToken() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  },
}
