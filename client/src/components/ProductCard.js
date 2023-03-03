import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { DeleteArticle, fetchProduct } from '../api/product';

const ProductCard = ({carte}) => {
    const navigate= useNavigate();

    const navigateProduct = ()=>{
        navigate(`/updateProduct/${carte._id}`)
    }
    const handelRemove =async()=>{
      await DeleteArticle(carte._id)
      
    }

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={carte.image} />
    <Card.Body>
      <Card.Title>{carte.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary" onClick={()=>navigateProduct()}>Go somewhere</Button>
      <Button variant="primary" onClick={()=>handelRemove()}>delete</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard






