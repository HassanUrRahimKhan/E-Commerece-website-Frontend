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

export const Products = ({cat, filters, sort}) => {
// console.log("🚀 ~ file: Products.jsx ~ line 16 ~ Products ~ filters", filters)

  const [products, setProducts] = useState([]);
  // console.log("🚀 ~ file: Products.jsx ~ line 18 ~ Products ~ products", products)
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log("🚀 ~ file: Products.jsx ~ line 19 ~ Products ~ filteredProducts", filteredProducts)
  
 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?categories=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
     
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  
  return (
    <Container>

      {cat ? filteredProducts.map((item) => (
        
        
        <Product item={item} key={item.id}></Product>
  
      )) :  products
          .slice(0,8).map((item) => (
        
        
        <Product item={item} key={item.id}></Product>
  
      )) }
     
        
        
  
     
    </Container>
  )
}

export default Products;