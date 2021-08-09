import {useState} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Product from "./components/Product"
import Cart from "./components/Cart"

function App() {

  const [allProducts,setAllProducts] = useState([
    {id:1, name:"Camisa React.js", price: 50},
    {id:2, name:"Camisa VueJS", price: 40},
    {id:3, name:"Camisa Node.js", price: 30},
    {id:4, name:"Camisa Angular", price: 20},
  ])

  const [cart,setCart] = useState([])

  const date = new Date().getFullYear()

  return (
    <>
      <Header 
        title="Tienda Virtual"
      />

      <h2>Lista de productos</h2>
      {
        allProducts.map((product)=>
          <Product 
            key={product.id}
            product={product}
            allProducts={allProducts}
            cart={cart}
            setCart={setCart}
          />
        )
      }

      <Cart 
        cart={cart}
        setCart={setCart}
      />

      <Footer 
        date={date}
      />
    </> 
  );
}

export default App;
