import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../reponsive';

const Container = styled.div`
    height: 60vh;
    background: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 20px;
    ${mobile({textAlign:"Center"})}

`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width:"80%"})}

`

const NewsLetter = () => {
    return (
       
            <Container>
                <Title>Newsletter</Title>
                <Description>Get timely updates from your favourite products.</Description>
                <InputContainer>
                    <Input placeholder="Your Email"></Input>
                    <Button>
                        <SendIcon />
                    </Button>
                </InputContainer>
            </Container>
       

    )
}

export default NewsLetter