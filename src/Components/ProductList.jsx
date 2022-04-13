import React from 'react'
import styled from 'styled-components'
import { Announcement } from './Announcement'
import Navbar from "./Navbar"
import NewsLetter from './NewsLetter'
import Products from './Products'
import Footer from "./Footer"
import { mobile } from '../reponsive'

const Container = styled.div``

const Title = styled.h1``

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width:"0px  20px", display:"flex", flexDirection:"column"})}
`

const FilterText = styled.span`
    font-size: 18px;
    font-weight: 600;
    ${mobile({marginRight:"0px"})}


`

const Select = styled.select`
    padding: 10px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}
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

                    <Select>
                        <Option selected disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                <Option selected disabled>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products></Products>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </Container>
    )
}

export default ProductList