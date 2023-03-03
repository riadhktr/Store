import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postProduct } from '../api/product';

const AddProduct = () => {
   const [name,setName] = useState('');
   const [price,setPrice] = useState('');
   const [quantity,setQuantity] = useState('');
   const [image,setImage] = useState('');

const handelAdd = async(value)=>{
    await postProduct(value)
}
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of product</Form.Label>
        <Form.Control type="text" placeholder="Enter your product name"  onChange={(e)=>setName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number"  onChange={(e)=>setPrice(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" onChange={(e)=>setQuantity(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      
      
      <Button variant="primary" onClick={()=>handelAdd({name,price,quantity,image})}>
        Submit
      </Button>
    </Form>
  )
}

export default AddProduct



