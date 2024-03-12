import {BsCart} from "react-icons/bs"
import {Navbar as NavbarBs,Button,Modal} from "react-bootstrap"
import {useState,useContext} from "react"
import { CartContext } from "../../context/cartContext"
import CartProduct from "../cartProduct"
const Navbar = () => {
    const[showModal,setShowModal]=useState(false)
    const cart=useContext(CartContext)
    const productCount=cart.items.reduce((sum,product)=>sum+product.quantity,0)
    const hndleShow=()=>{
        setShowModal(true)
    }
    const hndleClose=()=>{
        setShowModal(false)
    }
    return ( 
        <>
        <NavbarBs className="border-bottom border-secondary">
            <NavbarBs.Collapse className="justify-content-end">
                <Button variant="btn btn-outline-secondary" className="text-white" onClick={hndleShow}>({productCount})<BsCart className="mx-2"></BsCart>سبد خرید</Button>
            </NavbarBs.Collapse>
        </NavbarBs>
        <Modal show={showModal} onHide={hndleClose}  dir="rtl">
            <Modal.Header style={{backgroundColor:"#1a1c1e"}}>
            <Modal.Body>
                {
                    productCount > 0 ? (
                        <>
                        <h3 className="mb-4">سبد خرید</h3>
                        {cart.items.map((item)=>(
                            <CartProduct key={item.id} id={item.id} quantity={item.quantity}></CartProduct>
                        ))}
                        <h3>مجموع قیمت : {cart.getTotalAmount()} تومان</h3>
                        </>
                    ):(
                        <h3>سبد خرید خالی است</h3>
                    )
                }
                <Button onClick={hndleClose} variant="btn btn-outline-secondary" className="mt-4 mx-3 text-white">بستن</Button>
            </Modal.Body>
        </Modal.Header>
        </Modal>
        </>
     );
}
 
export default Navbar;