export const useAuthenticated = () => useState('isAuthenticated', () => false)

export const useUserInfo = () => useState('userInfo', () => null)