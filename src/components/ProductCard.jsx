import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '../context/StoreContext'
export default function ProductCard({ product }) {
  const { add } = useStore(); const [saved,setSaved] = useState(false)
  return <article className="product-card"><div className="product-image-wrap">{product.badge && <span className="product-badge">{product.badge}</span>}<button className={saved?'wishlist active':'wishlist'} onClick={()=>setSaved(!saved)} aria-label="Save product"><Heart size={17} fill={saved?'currentColor':'none'}/></button><Link to={`/product/${product.id}`} className="product-image"><img src={product.image} alt={product.name} loading="lazy" onError={e=>{e.currentTarget.src='/images/1771676161569.png'}}/></Link><button className="quick-add" onClick={()=>add(product)}><ShoppingBag size={15}/> Add to cart</button></div><div className="product-info"><span className="eyebrow">{product.category}</span><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><div className="rating"><Star size={14} fill="currentColor"/> {product.rating} <span>({product.reviews} reviews)</span></div><div className="price-row"><strong>Rs. {product.price.toLocaleString('en-PK')}</strong><del>Rs. {product.oldPrice.toLocaleString('en-PK')}</del><Link to={`/product/${product.id}`} className="round-arrow" aria-label="View product"><ArrowUpRight size={17}/></Link></div></div></article>
}
