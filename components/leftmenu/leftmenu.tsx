import React from "react"
import { LeftMenuItem } from "../leftmenuitem/leftmenuitem"
import { useDispatch } from "react-redux"
import styled from 'styled-components';
import { handleUserLogout } from "../../actions"
import { useRouter } from 'next/router'
import { AiOutlineLogout } from "react-icons/ai"
import { FiHome } from "react-icons/fi"
import { RiAdminLine } from "react-icons/ri"
import { FiUsers } from "react-icons/fi"
import { AiOutlineCustomerService } from "react-icons/ai"

const Wrapper = styled.section`
width: 250px;
color: #000000;
box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
background-color: #ffff;
height: 100vh;
position: fixed;
top: 0;
`;

const NavBar = styled.ul`
padding: 10px 0px;
display: flex;
flex-direction: column;
`;

const Logo = styled.div`
color: #5a6da3;
font-size: 55px;
font-weight: bold;
text-align: center
`;

const LeftMenu: React.FC = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <Wrapper>
            <Logo>
                DIFX
            </Logo>
            <NavBar>
                <LeftMenuItem
                    to="/dashboard"
                    exact
                    icon={<FiHome />}
                    text="Dashboard"
                />
                <br />
                <br />
                <LeftMenuItem
                    to="/dashboard/admin"
                    icon={<RiAdminLine />}
                    text="Admin"
                />
                <br />
                <br />
                <LeftMenuItem
                    to="/dashboard/provider"
                    icon={<FiUsers />}
                    text="Provider"
                />
                <br />
                <br />
                <LeftMenuItem
                    to="/dashboard/customer"
                    icon={<AiOutlineCustomerService />}
                    text="Customer"
                />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <LeftMenuItem
                    onClick={(e) => {
                        console.log("clicked")
                        e.preventDefault()
                        dispatch(handleUserLogout({
                            onSuccess: () => {
                                router.push('/')
                            }
                        }))
                    }}
                    icon={<AiOutlineLogout />}
                    text="Logout"
                />
            </NavBar>
        </Wrapper>
    )
}

export default LeftMenu
