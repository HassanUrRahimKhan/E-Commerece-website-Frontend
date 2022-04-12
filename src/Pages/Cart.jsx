import React from 'react';
import { Announcement } from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import bg from "../Assets/PngItem_2409185.png";
import bg2 from "../Assets/tshit.png";
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { maxWidth } from '@mui/system';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    `
const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px ;
`

const Info = styled.div`
    flex: 3;
    
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItemText = styled.span`
    
`
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;
    margin-top: 40px;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    height: 200px;
`
const Image = styled.img`
   display: flex;
	justify-content: center;
	align-items: center;
    `
const Details = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const HR = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`




const Cart = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <div style={{ display: 'flex', width: 200, alignItems: "center" }}>
                                    <Image src={bg} style={{ width: 200, height: 110 }}></Image>
                                </div>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES </ProductName>
                                    <ProductId><b>ID:</b>4742984727</ProductId>
                                    <ProductColor color='black'></ProductColor>
                                    <ProductSize><b>Size:</b> 47.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 40</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <HR />
                        <Product>
                            <ProductDetail>
                                <Image src={bg2}></Image>
                                <Details>
                                    <ProductName><b>Product:</b> Denim Tshirt </ProductName>
                                    <ProductId><b>ID:</b>80983092183</ProductId>
                                    <ProductColor color='black'></ProductColor>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>

                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer></Footer>
        </Container>
    )
}

export default Cart