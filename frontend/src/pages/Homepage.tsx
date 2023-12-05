
import { Row, Col } from 'react-bootstrap'
import { sampleproduct } from '../data'
import { Link } from 'react-router-dom'
export default function Homepage() {
    return (
        <Row >
            {sampleproduct.map((product) => (

                <Col key={product.slug} sm={6} md={4} lg={3}>
                    <Link to={'/product/' + product.slug} >
                        <img src={product.image} alt={product.name} />


                        <h2>{product.name}</h2>
                    </Link>

                </Col>
            ))}
        </Row>
    )
}
