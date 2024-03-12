import {Card,Button,Form,Col,Row} from "react-bootstrap"
import { useContext } from "react";
import {CartContext} from "../../context/cartContext"
const ProductItem = ({product}) => {
    const cart=useContext(CartContext)
    const productQuantity=cart.getProductQuantity(product.id)
    
    return ( 
        <Card className="mt-5" style={{backgroundColor:"#1a1c1e"
        }}>
            <Card.Body>
             <Card.Img variant="top" src={product.image} height="200px" style={{objectFit:"cover",borderRadius:"20%",width:"200px"}}/>
             <Card.Title align="right" className="text-light pt-4">{product.title}</Card.Title>
             <Card.Text align="right" className="text-light" dir="rtl">{product.price} تومان</Card.Text>
             {productQuantity > 0 ? (
                <>
                <Form as={Row}>
                    <Form.Label column='true' sm='6' className='text-white'>
                        تعداد :{productQuantity}
                    </Form.Label>
                    <Col sm={6}>
                    <Button sm='6' variant="btn btn-outline-secondary" className="mx-2 text-white" onClick={()=>cart.addItemToCart(product.id)} >+</Button>
                    <Button sm='6' variant="btn btn-outline-secondary" className="mx-2 text-white" onClick={()=>cart.removeItemFromCart(product.id)}>-</Button>
                    </Col>
                </Form>
                <Button onClick={()=>cart.deleteFromCart(product.id)} className="my-4" variant="btn btn-light">حذف از سبد خرید</Button>
                </>
             ):(
                <Button onClick={()=>cart.addItemToCart(product.id)} variant="btn btn-outline-secondary" className="text-white">افزودن به سبد خرید</Button>
             )
            }
            </Card.Body>
        </Card>
     );
}
 
export default ProductItem;