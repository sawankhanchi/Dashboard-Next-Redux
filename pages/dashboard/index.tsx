/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import AdminLayout from "../../components/adminlayout/adminlayout"
import styled from 'styled-components';
import { FaOpencart } from "react-icons/fa"
import { RiLuggageCartLine } from "react-icons/ri"
import { MdDone } from "react-icons/md"

const Card = styled.section`
background-color: #fff;
padding: 19px 0 6.9px 1px;
border-radius: 10px;
box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
position: relative;
margin-top: 46px;
height: 250px
`;

const MainRow = styled.main`
display: flex;
flex-wrap: wrap;
margin-left: 250px;
margin-right: 13px;
`;

const ColumnDiv = styled.section`
flex: 0 0 33.3333333333%;
max-width: 31.3333333333%;
margin-left: 20px
`;

const InnerContent = styled.section`
padding: 0 20px;
`;

const InnerIcon = styled.div`
padding: 6px;
border-radius: 30px;
font-size: 22px;
color: #5a6da3;
background-color: #5a6da323;
width: 40px
`;

const InnerHeading = styled.h4`
font-size: 25px;
margin-left: 6px;
`;

const InnerTextP = styled.p`
color: #9b9b9b;
font-size: 17px;
margin-left: 6px;
font-weight: 500;
`;

const InnerTextS = styled.span`
position: absolute;
top: 53px;
margin-left: 50%;
transform: translateX(-50%);
font-size: 34px;
font-weight: 500;
color: #9b9b9b29;
`;

const InnerDetails = styled.div`
text-align: center;
font-size: 34px;
font-weight: 500;
`;

const InnerTextSTag = styled.span`
font-size: 17px;
font-weight: bold;
color: #000000;
text-align: center;
`;

const InnerPTag = styled.p`
color: #f75994;
`;

const Dashboard = () => {

    return (
        <>
            <AdminLayout title="Dashboard">
                <MainRow>
                    <ColumnDiv>
                        <Card>
                            <InnerContent>
                                <InnerIcon>
                                    <FaOpencart></FaOpencart>
                                </InnerIcon>
                                <InnerHeading>
                                    12
                                </InnerHeading>
                                <InnerTextP>Orders Today</InnerTextP>
                                <InnerTextS>Today</InnerTextS>
                            </InnerContent>
                        </Card>
                    </ColumnDiv>

                    <ColumnDiv>
                        <Card>
                            <InnerContent>
                                <InnerIcon>
                                    <MdDone />
                                </InnerIcon>
                                <InnerHeading>
                                    26
                                </InnerHeading>
                                <InnerTextP>Current Orders</InnerTextP>
                                <InnerTextS>Current</InnerTextS>
                            </InnerContent>
                        </Card>
                    </ColumnDiv>
                    <ColumnDiv>
                        <Card>
                            <InnerContent>
                                <InnerIcon>
                                    <RiLuggageCartLine></RiLuggageCartLine>
                                </InnerIcon>
                                <InnerHeading>
                                    223
                                </InnerHeading>
                                <InnerTextP>Canceled Orders</InnerTextP>
                                <InnerTextS>Completed</InnerTextS>
                            </InnerContent>
                        </Card>
                    </ColumnDiv>
                </MainRow>

                <MainRow>
                    <ColumnDiv>
                        <Card>
                            <InnerDetails>
                                <InnerPTag>Battery</InnerPTag>
                                <InnerTextSTag>Most Bought Items</InnerTextSTag>
                            </InnerDetails>
                        </Card>
                    </ColumnDiv>
                    <ColumnDiv>
                        <Card>
                            <InnerDetails>
                                <InnerPTag>Wheel</InnerPTag>
                                <InnerTextSTag>Most Bought Items</InnerTextSTag>
                            </InnerDetails>
                        </Card>
                    </ColumnDiv>
                    <ColumnDiv>
                        <Card>
                            <InnerDetails>
                                <InnerPTag>13</InnerPTag>
                                <InnerTextSTag>Canceled Orders</InnerTextSTag>
                            </InnerDetails>
                        </Card>
                    </ColumnDiv>
                </MainRow>
            </AdminLayout>
        </>
    )
}

export default Dashboard;
