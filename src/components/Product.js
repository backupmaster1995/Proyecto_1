import React from 'react'

function Product({product,allProducts,cart,setCart}) {

    const {id,name,price} = product

    const addToCart = (id) =>{
        const productToAdd = allProducts.find((product)=>
            product.id === id
        )
        setCart([...cart,productToAdd])
    }

    const removeFromCart = (id) =>{
        const cartUpdated = cart.filter((product)=>product.id !== id)
        setCart(cartUpdated)
    }


    
    return (
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
            {
                allProducts
                ?
                <button
                type="button"
                onClick={()=>addToCart(id)}
                >Comprar</button>
                :
                <button
                type="button"
                onClick={()=>removeFromCart(id)}
                >Eliminar</button>
            }
           
        </div>
    )
}

export default Product
