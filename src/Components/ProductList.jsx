import React from 'react'
import styled from 'styled-components'
import { Announcement } from './Announcement'
import Navbar from "./Navbar"
import NewsLetter from './NewsLetter'
import Products from './Products'
import Footer from "./Footer"

const Container = styled.div``

const Title = styled.h1``

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 18px;
    font-weight: 600;


`

const Select = styled.select`
    
`

const Option = styled.option`
    
`

const ProductList = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option selected disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                       

                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText></Filter>
            </FilterContainer>
            <Products></Products>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </Container>
    )
}

export default ProductList