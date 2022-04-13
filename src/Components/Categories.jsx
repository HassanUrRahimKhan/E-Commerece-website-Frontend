import styled from 'styled-components'
import React from 'react'
import CategoryItem from '../CategoryItem';
import { categories } from '../Data';
import { mobile } from '../reponsive';

const Container = styled.div`
        display: flex;
        padding:20px;
        justify-content: space-between;
        ${mobile({padding:"0px", flexDirection: "column"})}
`


const Categories = () => {
  return (
    <Container>
        {categories.map((item)=>(
            <CategoryItem item={item} key={item.id}></CategoryItem>
        ))}
    </Container>
  )
}

export default Categories