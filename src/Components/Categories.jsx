import styled from 'styled-components'
import React from 'react'
import CategoryItem from '../CategoryItem';
import { categories } from '../Data';


const Container = styled.div`
        display: flex;
        padding:20px;
        justify-content: space-between;
`


const Categories = () => {
  return (
    <Container>
        {categories.map((item)=>(
            <CategoryItem item={item}></CategoryItem>
        ))}
    </Container>
  )
}

export default Categories