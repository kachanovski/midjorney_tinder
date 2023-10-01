export const JWTToken = {
  getAccess() {
    return localStorage.getItem('access_token')
  },
  setAccess(access_token: string) {
    localStorage.setItem('access_token', access_token)
  },
  removeToken() {
    localStorage.removeItem('access_token')
  },
  getAccessDiscord() {
    return localStorage.getItem('access_token_discord')
  },
  setAccessDiscord(access_token: string) {
    localStorage.setItem('access_token_discord', access_token)
  },
  removeTokenDiscord() {
    localStorage.removeItem('access_token_discord')
  },
}
