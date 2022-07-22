import styled from "styled-components";
import {MdArrowForward, MdFiberManualRecord} from 'react-icons/md'
import { BsXLg,BsCheckLg, BsEnvelope } from "react-icons/bs";

export const InfoContainer = styled.div `
    color: #ffff;
    //background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width:768px) {
        padding: 100px 0;
    }
`
export const RouteArea = styled.div`
    padding-top: 80px;
    padding-bottom: 120px;
    position: relative;
    display: grid;
    z-index:1;
    width:100%;
    max-width:1440px;
    margin-right:auto;
    margin-left:auto;
    justify-content: center;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media (max-width: 767px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;


export const InfoWrapper = styled.div`
    display: grid;
    z-index:1;
    height: 860px;
    width:100%;
    max-width:1440px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 24px;
    justify-content: center;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:100px;
    padding-bottom:40px;
    margin-left:100px;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 768px) {
        padding-top:50px;
        margin-left:20px;
        
    }
`;

export const TextWrapper1 = styled.div`
    max-width: 540px;
    padding-top:100px;
    padding-bottom:40px;
    margin-left:200px;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 768px) {
        padding-top:50px;
        margin-left:20px;
        
    }
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size:16px;
    libe-height:16px;
    font-weight: 700;
    font-style:bold;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    // margin-bottom:24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 18px; 
    text-align: center; 
    color: #0077C0;
    padding-top:10px;

    @media screen and (max-width: 768px){
        font-size:16;
    }

    @media screen and (max-width: 480px) {
        font-size:32px;
    }
`;

export const BoxCard = styled.div`
    width: 661px;
    height: 64px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`