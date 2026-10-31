// CONTROLLER: business rules and browser persistence for the demo storefront.
const CART_KEY = 'atz_cart_v1'
const USERS_KEY = 'atz_users_v1'
const SESSION_KEY = 'atz_session_v1'
export const readCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]')
export const saveCart = cart => localStorage.setItem(CART_KEY, JSON.stringify(cart))
export function addToCart(cart, product) {
  const found = cart.find(item => item.id === product.id)
  return found ? cart.map(item => item.id === product.id ? { ...item, qty: Math.min(item.qty + 1, product.stock) } : item) : [...cart, { ...product, qty: 1 }]
}
export const cartCount = cart => cart.reduce((sum, item) => sum + item.qty, 0)
export const cartTotal = cart => cart.reduce((sum, item) => sum + item.price * item.qty, 0)
export function registerUser({ name, email, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  if (users.some(user => user.email.toLowerCase() === email.toLowerCase())) throw new Error('An account with this email already exists.')
  users.push({ name, email, password })
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  const session = { name, email }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}
export function loginUser({ email, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  const user = users.find(item => item.email.toLowerCase() === email.toLowerCase() && item.password === password)
  if (!user) throw new Error('Email or password is incorrect. Please register first if you are new.')
  const session = { name: user.name, email: user.email }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}
export const readSession = () => JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
export const logoutUser = () => localStorage.removeItem(SESSION_KEY)
