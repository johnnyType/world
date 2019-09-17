import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const FootContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: black;
    height: 70px;
    opacity: 0.7;
    margin-top: -25px;
`;
const FootText = styled.p`
    width: 250px;
    margin-left:auto;
    margin-right:auto;
    vertical-align: middle;
    font-weight:200;
    font-size: 15px;
    color: white;
    line-height:1.5;
`;

const Footer = (props) => {
    return (
        <FootContainer>
            <FootText>{ReactHtmlParser(props.text)}</FootText>
        </FootContainer>
    );
}

export default Footer;