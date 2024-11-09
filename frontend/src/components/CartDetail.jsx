import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Global} from "../helpers/Global.jsx"
import ItemCount from './ItemCount.jsx';

const CardDetail = ({ product }) => {

    const productImage=String(product.thumbnails)

    return (
        <Card className='card-product detail-product' style={{ width: '38rem', height:'41rem' }}>
            <Card.Img  className='card-image' variant="top" src={`${Global.url}products/media/${productImage}`} title={product.title} alt={product.title}/>
            <Card.Body>
                <Card.Title className='product-title'>{product.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
                <ListGroup.Item>Disponibles: {product.stock}</ListGroup.Item>
            </ListGroup>
            <Card.Body className="button-card">
            <ItemCount stock={product.stock}/>
            </Card.Body>
        </Card>

    )
}


export default CardDetail