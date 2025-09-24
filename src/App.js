import React, { useState } from 'react'
import './index.css'
import Maincontainer from "./MainContainer/Maincontainer";
import Navbar from "./Navbar/Navbar";
import ProductList from './Productlist'
import Checkoutcontainer from "./CheckoutContainer/Checkoutcontainer";

function App() {

  const [products, setProducts] = useState(ProductList)
  const [newProducts, setNewProducts] = useState(ProductList)
  const [total, setTotalPrice] = useState(0);
  const [NumberofProduct, setNumberofProduct] = useState(0);
  const [opencart, setOpenCart] = useState(false)
  const checkedoutCartitems = [];
  const [cartitems, setCartItems] = useState([])
  const [listofProducts, setListofProducts] = useState(false)
  const [openAmountdetails, setopenAmountdetails] = useState(false)

    const AddtotheCart = (updatedProductList) => {
      for(let i=0; i < updatedProductList.length; i++){
        if(updatedProductList[i].amount !== 0 && !checkedoutCartitems.includes(updatedProductList[i])){
          checkedoutCartitems.push(updatedProductList[i])
        }
      }
      setCartItems(checkedoutCartitems)
    }

    const calculateTotalPrice_and_NumberofProduct = (updatedProductList) => {
        let newTotalPrice = 0;
        let numberofProduct = 0;
        for (let i = 0; i < updatedProductList.length; i++) {
            if (updatedProductList[i].totalprice) {
              newTotalPrice += updatedProductList[i].totalprice;
              numberofProduct += updatedProductList[i].amount;
            }
        }
        setTotalPrice(newTotalPrice);
        setNumberofProduct(numberofProduct)
    }
    const decreaseamount = (product) => {
        const updatedProductList = products.map((item) => item.id === product && item.amount > 0 ? { ...item, amount: item.amount - 1, totalprice: (item.amount - 1) * item.price } : item)

        setProducts(updatedProductList)
        calculateTotalPrice_and_NumberofProduct(updatedProductList)
        AddtotheCart(updatedProductList)
        setopenAmountdetails(true)
    }

    const increaseamount = (product) => {
        const updatedProductList = products.map((item) => item.id === product ? { ...item, amount: item.amount + 1, totalprice: (item.amount + 1) * item.price } : item)

        setProducts(updatedProductList)
        calculateTotalPrice_and_NumberofProduct(updatedProductList)
        AddtotheCart(updatedProductList)
        setopenAmountdetails(true)
    }

    const openCart = () => {
      if(opencart === false){
        setOpenCart(true)
        setListofProducts(false)
      }else{
        setOpenCart(false)
      }
    }

  const clearCart = () => {
    setCartItems([]);
    setNumberofProduct(0);
    setTotalPrice(0);
    setProducts(newProducts)
  }   

  const handleChange = (e) => {
    const filteredListofProducts = products.filter((product)=> product.title.toLocaleLowerCase().startsWith(e.target.value))
    const restoftheProducts = products.filter((product)=> !(product.title.toLocaleLowerCase().startsWith(e.target.value)))
    setProducts([...filteredListofProducts, ...restoftheProducts])
  }

  const openSuggestions = () => {
    if(opencart === true){
      setListofProducts(false)
    }
    else{
      setListofProducts(true);
    }
  } 

  const closeSuggestions = (e) => {
    setListofProducts(false);
    e.target.value = "";
  } 

  const find_the_product = (product) => {
    const theProduct = products.filter((item)=> item.id === product)
    const therestoftheproducts = products.filter((item)=> item.id !== product )
    setProducts([...theProduct, ...therestoftheproducts]);
    setListofProducts(false)

  }
  return (
    <div className="App">
      <Navbar openCart={openCart} opencart={opencart} NumberofProduct={NumberofProduct} openSuggestions={openSuggestions} listofProducts={listofProducts} products={products} closeSuggestions={closeSuggestions} find_the_product={find_the_product} handleChange={handleChange}/>
    {opencart ? <Checkoutcontainer cartitems={cartitems} total={total} NumberofProduct={NumberofProduct} decreaseamount={decreaseamount} increaseamount={increaseamount} clearCart={clearCart}/>  : <Maincontainer products={products} decreaseamount={decreaseamount} increaseamount={increaseamount} openAmountdetails={openAmountdetails}/>}
    </div>
  );
}

export default App;
