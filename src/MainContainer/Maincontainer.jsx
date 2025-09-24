import React from 'react'
import './maincontainer.css'

const Maincontainer = ({ products, decreaseamount, increaseamount, openAmountdetails }) => {

    return (
        <div className='maincontainer'>
            {products.map((product) => (
                <div key={product.id} className='product'>
                    <div className="product-image-container">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <div className="add-item">
                        <button className='decrease' onClick={() => decreaseamount(product.id)}>-</button>
                        <h4>{product.amount}</h4>
                        <button className='increase' onClick={() => increaseamount(product.id)}>+</button>
                    </div>
                    {product.amount > 0 && <h4 style={{ marginBottom: openAmountdetails ? '20px' : 0 }}>{product.amount} item added</h4>}
                </div>
            ))}
        </div>
    )
}

export default Maincontainer