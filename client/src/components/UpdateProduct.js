import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from 'react-router-dom'
import { GetById, updateProduct } from '../api/product';
const UpdateProduct = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [quantity,setQuantity] = useState('');
    const [image,setImage] = useState('');
 

    const handelUpdate= async()=>{
         await updateProduct(id,{name,price,quantity,image})
         navigate('/')
    }

  return (
    <div>
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
      
      
      <Button variant="primary" onClick={()=>handelUpdate()} >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default UpdateProduct