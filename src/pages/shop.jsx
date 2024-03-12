import { productList } from "../data/data";
import {Row,Col} from "react-bootstrap"
import ProductItem from "../components/productItem/productItem";
const Shop = () => {
    return ( 
        <Row xs={1} md={4} className="g-4">
                {productList.map((item)=>(
                    <Col key={item.id} align="center">
                    <ProductItem product={item}/>
                    </Col>
                ))}
        </Row>
     );
}
 
export default Shop;