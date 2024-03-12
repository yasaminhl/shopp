import { createContext,useState} from "react";
import {getProductData} from "../data/data"
export const CartContext=createContext({
    items:[],
    getProductQuantity:()=>{},
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    deleteFromCart:()=>{},
    getTotalAmount:()=>{}
})
export function CartProvider({children}){
    const[cartProduct,setCartProduct]=useState([])

    function getProductQuantity(id){
        const quantity=cartProduct.find((item)=>item.id===id)?.quantity
        if(quantity===undefined){
            return 0
        }
        return quantity
    }
    function addItemToCart(id){
      const quantity=getProductQuantity(id)
        if(quantity===0){
            setCartProduct([...cartProduct,{id:id,quantity:1}])
        }else{
            setCartProduct(

                    cartProduct.map((item)=>item.id===id?{...item,quantity:item.quantity+1}:
                    item)
                )
            
        }
    }
    function deleteFromCart(id){
      setCartProduct((cartProduct)=>
      cartProduct.filter((item)=>{
        return item.id!=id
      }))
}
function removeItemFromCart(id){
    const quantity=getProductQuantity(id)
    if(quantity===1){
        deleteFromCart(id)
    }else{
        setCartProduct(
            cartProduct.map((item)=>item.id===id?{...item,quantity:item.quantity-1}:
            item)
        )
    }
}
function getTotalAmount(){
    let totalAmount=0
    cartProduct.map((item)=>{
        const productData=getProductData(item.id)
        totalAmount+= productData.price* item.quantity
    })
    return totalAmount
}

     
    const ContextValue={
    items:cartProduct,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount
    }
    return(
        <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
    )
}