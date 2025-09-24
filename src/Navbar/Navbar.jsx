import React from 'react'
import './navbar.css'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ openCart, opencart, NumberofProduct, openSuggestions, listofProducts, products, closeSuggestions, find_the_product, handleChange }) => {
    return (
        <nav className='nav-container'>
            <div className="title">
                <h2>Shopper's Point</h2>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." onFocus={() => openSuggestions()} onBlur={(e) => closeSuggestions(e)} onChange={(e) => handleChange(e)} />
                {listofProducts &&
                    <ul className='dropdown-menu'>{products.map((product) => (
                        <li key={product.id} ><h3 onMouseDown={() => find_the_product(product.id)}>{product.title}</h3></li>
                    ))}</ul>}
            </div>
            <div className="shopping-cart-icon" onClick={() => openCart()}>
                <FaCartShopping className='icon' />
                {/* <i className="ri-shopping-cart-2-line" style={{ opacity: opencart ? 0.4 : 1 }}></i> */}
                {NumberofProduct > 0 && <h6 style={{ opacity: opencart ? 0.4 : 1 }}>{NumberofProduct}</h6>}
            </div>
        </nav>
    )
}

export default Navbar