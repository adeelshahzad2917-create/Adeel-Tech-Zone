import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { addToCart, cartCount, cartTotal, readCart, saveCart } from '../controllers/storeController'
const StoreContext = createContext(null)
export function StoreProvider({ children }) {
  const [cart, setCart] = useState(readCart)
  const [toast, setToast] = useState('')
  useEffect(() => saveCart(cart), [cart])
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(''), 2400); return () => clearTimeout(timer) }, [toast])
  const value = useMemo(() => ({ cart, count: cartCount(cart), total: cartTotal(cart), toast,
    add: product => { setCart(current => addToCart(current, product)); setToast(`${product.name} added to cart`) },
    remove: id => setCart(current => current.filter(item => item.id !== id)),
    updateQty: (id, qty) => setCart(current => current.map(item => item.id === id ? { ...item, qty: Math.max(1, Math.min(Number(qty) || 1, item.stock)) } : item)),
    clear: () => setCart([]), notify: setToast
  }), [cart, toast])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore = () => useContext(StoreContext)
