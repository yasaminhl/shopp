import { Button } from "react-bootstrap";
import { getProductData } from "../data/data";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
const CartProduct = ({id,quantity}) => {
    const cart=useContext(CartContext)
    const productData=getProductData(id)
    return ( 
        <>
        <p>{productData.title}</p>
        <p> تعداد:{quantity}</p>
        <p> قیمت:{quantity*productData.price}</p>
        <Button variant="btn btn-outline-secondary" size="sm" className="mb-5 text-white" onClick={()=>cart.deleteFromCart(productData.id)}>حذف</Button>
        </>
     );
}
 
export default CartProduct;