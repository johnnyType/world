import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const HeadContainer = styled.div`
    text-align: center;
    background-color: black;
    color: white;
    height: 80px;
    magin-top: 0px;
    border: solid 5px #A9A9A9;
    opacity: 0.8;
`;
const HeadText = styled.p`
    vertical-align: middle;
    margin-top: 0;
    font-weight:500;
    font-size: 50px;
    color: #DCDCDC;
`;

const Header = (props) => {
    const { text } = props;
    return (
        <HeadContainer>
            <HeadText>{ReactHtmlParser(text)}</HeadText>
        </HeadContainer>
    );
}

export default Header;