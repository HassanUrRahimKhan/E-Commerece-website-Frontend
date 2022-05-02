import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../Data'
import Product from '../Product'
import { useEffect, useState } from 'react';
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Products = (cat,filters,sort ) => {
  
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(()=>{
    const getProducts = async () =>{
      try {
        const res = await axios.get("http://localhost:5000/api/products")
        console.log(res)
        
      } catch (error) {}
    };
    getProducts();

},[cat])



  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products;