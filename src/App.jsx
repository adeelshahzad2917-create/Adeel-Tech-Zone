import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import Shop from './views/Shop'
import Product from './views/Product'
import Cart from './views/Cart'
import Auth from './views/Auth'
import Checkout from './views/Checkout'
import { About, Contact } from './views/Info'
import { StoreProvider } from './context/StoreContext'
import { useStore } from './context/StoreContext'
function Toast(){const {toast}=useStore();return toast?<div className="toast" role="status">{toast}</div>:null}
function AppRoutes(){return <><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="shop" element={<Shop/>}/><Route path="product/:id" element={<Product/>}/><Route path="cart" element={<Cart/>}/><Route path="login" element={<Auth/>}/><Route path="register" element={<Auth mode="register"/>}/><Route path="checkout" element={<Checkout/>}/><Route path="about" element={<About/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes><Toast/></>}
export default function App(){return <StoreProvider><HashRouter><AppRoutes/></HashRouter></StoreProvider>}
