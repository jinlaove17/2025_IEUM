import { OAuthProvider } from "../types/auth.type"

const useOAuthLoginLink = (provider: OAuthProvider) => {
  const BASE_SERVER_URL = import.meta.env.VITE_BASE_SERVER_URL
  const LOGIN_URL = `${BASE_SERVER_URL}${import.meta.env.VITE_LOGIN_URL}`

  return `${LOGIN_URL}/${provider}`
}
export default useOAuthLoginLink
