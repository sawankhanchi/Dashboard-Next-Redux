import React from "react"
import Header from "../header/header"
import LeftMenu from "../leftmenu/leftmenu"
import styled from 'styled-components';

const Wrapper = styled.section`
background-color: #f6f6f6;
min-height: 100vh;
overflow: visible;
padding: 1px;
`;

const AdminLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {

    return (
        <Wrapper>
            <Header title={title} />
            <LeftMenu />
            <main>{children}</main>
        </Wrapper>
    )
}

export default AdminLayout
