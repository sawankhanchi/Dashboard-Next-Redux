import React from "react"
import styled from 'styled-components';

const Wrapper = styled.section`
background-color: #fff;
display: flex;
justify-content: space-between;
margin-left: 265px;
margin-right: 15px;
padding: 20px;
box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.11);
border-radius: 5px;
margin-top: 27px;
`;

const Header = ({ title }: { title: string }) => {

    return (
        <Wrapper>
            <span>{title}</span>
        </Wrapper>
    )
}

export default Header
