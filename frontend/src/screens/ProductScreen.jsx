
import  { Link, useParams } from "react-router-dom"
import { Row,Col,Image,ListGroup, ListGroupItem,Card, Button} from "react-bootstrap";
import products from "../Product"
import Rating from "../components/Rating";

const ProductScreen = ( ) => {
// get the id from the url
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId )

        console.log(product)
    return(
        <>
        <Link to ="/" className="btn btn-light my-3">
            Go Back 
        </Link>

        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col  md={4}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value = {product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        Decription : $ {product.description}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col  md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                    <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' :' Out of Stock'}</strong>
                                </Col>
                            </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button className="btn-block"
                        type="button"
                        disabled={product.countInStock = 0}>
                                        Add Cart
                        </Button>

                    </ListGroupItem>
                </ListGroup>
                </Card>
            </Col>
            
        </Row>
        </>

    )
}


export default ProductScreen  ;