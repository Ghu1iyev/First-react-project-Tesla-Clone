import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
  return (
    <Container>
      <Logo>
      <a href="#home">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      </Logo>
      <Menu>
        <a href="#nav">Model S</a>
        <a href="#nav">Model 3</a>
        <a href="#nav">Model X</a>
        <a href="#nav">Model Y</a>
        <a href="#nav">Solar Roof</a>
        <a href="#nav">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#nav">Shop</a>
        <a href="#nav">Account</a>
        <a onClick={() => setBurgerStatus(true)} href="#nav">Menu</a>
      </RightMenu>
      <MenuResponsive>
            <a onClick={() => setBurgerStatus(true)} href="#nav">Menu</a>
      </MenuResponsive>
      <BurgerNav show={burgerStatus}>
        <Title>
            <a onClick={() => setBurgerStatus(false)} href="#nav"><FontAwesomeIcon icon={faXmark} /></a>
        </Title>
        <li><a href="#nav">Model S</a></li>
        <li><a href="#nav">Model 3</a></li>
        <li><a href="#nav">Model X</a></li>
        <li><a href="#nav">Model Y</a></li>
        <li><a href="#nav">Solar Roof</a></li>
        <li><a href="#nav">Solar Panels</a></li>
        <li><a href="#nav">Existing Inventory</a></li>
        <li><a href="#nav">Used Inventory</a></li>
        <li><a href="#nav">Trade-In</a></li>
        <li><a href="#nav">Test Drive</a></li>
        <li><a href="#nav">Insurance</a></li>
        <li><a href="#nav">Powerwall</a></li>
        <li><a href="#nav">Commercial Energy</a></li>
        <li><a href="#nav">Utilities</a></li>
        <li><a href="#nav">Charging</a></li>
        <li><a href="#nav">Find Us</a></li>
        <li><a href="#nav">Support</a></li>
        <li><a href="#nav">Investor Relations</a></li>
        <li><a href="#nav">Shop</a></li>
        <li><a href="#nav">Account</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    flex-wrap: nowrap;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    padding-right: 30px;

    a{
        font-weight: 600;
    }
    
    @media (max-width: 1100px) {
        display: none;
  }
`

const Logo = styled.div``
const MenuResponsive = styled.div`
    display:none;

    @media(max-width: 1100px){
        display: block;
        margin-right:20px;
        a{
            font-weight: 600;
            color: black;
            background-color: #A3B4C3;
            
            padding: 5px 12px;
            border-radius: 5px;
        }
    }
`
const BurgerNav = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
    width: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    text-align: start;
    z-index: 100;
    transition: 1s;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li{
        list-style-type: none;
        margin-top: 20px;
        font-weight: 600;
    }

    
`

const Title = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 10px;
    margin-top: 10px;
    a{
        font-size: 25px;

    }
`