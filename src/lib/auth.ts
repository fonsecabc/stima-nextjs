export function isAuthenticated() {
  const isAccessTokenSet = localStorage.getItem('accessToken')
  const isCurrentUserSet = localStorage.getItem('currentUser')

  // return isAccessTokenSet && isCurrentUserSet
  return true
}

export function login(accessToken: string, currentUser: string) {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('currentUser', currentUser)
}

export function logout() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('currentUser')
}