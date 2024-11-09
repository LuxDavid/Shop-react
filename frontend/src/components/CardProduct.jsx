import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Global } from "../helpers/Global.jsx"

const CardProduct = ({ product }) => {

   

    return (
        <Card className='card-product' style={{ width: '15rem', height: '26rem' }}>
            <Card.Img className='card-image' variant="top" src={`${Global.url}products/media/${product.thumbnails[0]}`} title={product.title} alt={product.title} />
            <Card.Body>
                <Card.Title className='product-title'>{product.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='list-element'>Precio: ${product.price}</ListGroup.Item>
                <ListGroup.Item className='list-element'>Disponibles: {product.stock}</ListGroup.Item>
            </ListGroup>
            <Card.Body className="button-card">
                <Link to={`/product/${product._id}`} ><Button variant="dark">Comprar</Button></Link>
            </Card.Body>
        </Card>

    )
}


export default CardProduct