import { Scope } from './scopes.js'

export const CLIENT_ID = '0d8eb86155624fa1a6d6dc379a71a785'

// Has to be added to the spotify app dashboard.
export const REDIRECT_URI = 'http://localhost:5173/login'

export const SCOPES: Scope[] = [Scope.UserLibraryRead]
