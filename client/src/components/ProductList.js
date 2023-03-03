import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../api/product';
import { setProduct } from '../store/ProductSlice';
import ProductCard from './ProductCard'

const ProductList = () => {
    const dispatch = useDispatch();
    const Products = useSelector((state)=>state.product);
 
    const getProduct = async()=>{
        const data = await fetchProduct();
        
        dispatch(setProduct(data.productList)) // data 
    }
    
    useEffect(()=>{
        getProduct()
    },[Products])
  return (
    <div>
    {Products.map((el,key)=>{
        return <div key={key}>
            <ProductCard carte={el} />
        </div>
    })}   
          
    </div>
      
     
  
  )
}

export default ProductList