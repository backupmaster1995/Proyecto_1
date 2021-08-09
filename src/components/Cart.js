import React from 'react'
import "./cart.css"
import Product from "./Product"

function Cart({cart, setCart}) {
    return (
        <div className="cart">
            <h2>Tu carrito de compras</h2>
            {
                cart.length === 0
                ?
                <p>No hay productos en el carrito</p>
                :
                cart.map((product)=>
                    <Product 
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                    />
                )
            }
        </div>
    )
}

export default Cart
