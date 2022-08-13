import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
     body {
        font-family: 'Work Sans', sans-serif;
     }
`

export const Nav = styled.nav `
    background:  ${({scrollNav}) => (scrollNav ='#ffff')};
    height: 80px;
    margin-top: -10px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height:80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
   
`;

export const NavLogo = styled(LinkR) `
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #2A3739;
    justify-self: flex-start;
    cursor:pointer;
    display:flex;
    align-items: center;
    margin-left: 10px;
    text-decoration: none;
`;

export const TextLogo = styled.p `
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #638CA5;
    justify-self: center;
    cursor:pointer;
    display:flex;
    align-items: center;
    letter-spacing: 5px;
    // margin-left: 16px;
    margin-top:20px;
    text-decoration: none;
    `

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px) {
        color:black;
        display: block;
        position: absolute;
        top: 0;
        right: 0 ;
        margin-top:30px;
        margin-right:10px;
        transform: translated(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
    }
`;

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    margin-top:20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: #697678;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height:100%;
    cursor: pointer;

    &.active {
        font-weight:700;
        color:#1D77CA;
      
    }

    @media screen and (max-width: 768px) {
        &:hover{
            color: #1D77CA;
            
        }
    }
`;
export const NavLinksContact = styled(LinkS)`
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: #F9995D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height:100%;
    cursor: pointer;

    &.active {
        font-weight:700;
        color:#1D77CA;
       
    }

    @media screen and (max-width: 768px) {
        &:hover{
            color: #1D77CA;

        }
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;
export const Img = styled.img`
width: 85px;
height: 62px;
    margin: 0 0 10px 0;
    padding-right:0;

`;

export const ImgWrap = styled.div`
    width:60%;
    height:60%;
`;

