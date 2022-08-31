import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Item = ({product}) =>{


    return(
        <Card key={product.id} className="item-card">
        <Card.Img className="item-img" src={product.image} />
        <Card.Body className="card-body">
            <Card.Title className="card-title">{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Link to={`/detalles/${product.id}`}>Info</Link>
            <Button variant="dark">Add to Cart</Button>
        </Card.Body>
    </Card>
    )
}

export default Item