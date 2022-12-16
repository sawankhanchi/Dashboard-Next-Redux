import React from "react"
import styled from 'styled-components';

type ILeftMenuItemProps = {
    to?: string
    text: string
    icon: React.ReactElement
    exact?: boolean
    onClick?: (e: React.MouseEvent) => void
}

const Wrapper = styled.div`
padding: 10px;
color: #fff !important;
border-radius: 5px;
box-shadow: 0 3px 6px 0 #5a6da3;
background-color: #5a6da3;
cursor: pointer;
`;

const LeftItem = styled.span`
padding: 8px;
`;

export const LeftMenuItem = ({
    text,
    icon,
    onClick,
}: ILeftMenuItemProps) => {

    return (
        <Wrapper onClick={onClick}>
            <LeftItem
            >
                {icon}
            </LeftItem>
            <span>{text}</span>
        </Wrapper>
    )
}
