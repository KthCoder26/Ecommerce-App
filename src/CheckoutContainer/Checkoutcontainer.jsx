import React from 'react'
import './checkoutcontainer.css'

const Checkoutcontainer = ({ cartitems, total, NumberofProduct, decreaseamount, increaseamount, clearCart }) => {
    return (
        <div className='Checkoutcontainer'>
            {total === 0 ?
                <div className='empty-cart'>
                    <h1>Your cart is empty.....</h1>
                </div> :
                <div>
                    <div className="cart-item-intro">
                        <h1>Cart Items :-</h1>
                    </div>
                    <div className="cart-items">
                        {cartitems.map((item) => (
                            <div key={item.id} className="item">
                                <div className="image-container">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="information-container">
                                    <h2>{item.title}</h2>
                                    <h3>Quantity:- {item.amount}</h3>
                                </div>
                                <div className="item-controller">
                                    <button className='decrease' onClick={() => decreaseamount(item.id)}>-</button>
                                    <button className='increase' onClick={() => increaseamount(item.id)}>+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-items-total">
                        <h2>Numbers of Product you have bought:- {NumberofProduct}</h2>
                        <h2>Total Amount you need to pay is :- ${total.toFixed(2)}</h2>
                    </div>
                    <div className="clear-cart">
                        <button onClick={() => clearCart()}> Clear Cart </button>
                    </div>
                </div>}
        </div>
    )
}

export default Checkoutcontainer