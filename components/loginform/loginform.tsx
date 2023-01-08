import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from 'styled-components';
import { useDispatch } from "react-redux"
import { handleUserLogin } from "../../actions";
import { useRouter } from 'next/router'
import { useToasts } from "react-toast-notifications"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #506DA6;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 140px;
`;

const Form = styled.form`
    margin: 0 auto;
    width: 100%;
    height: 350px;
    max-width: 414px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Input = styled.input`
  max-width: 100%;
  padding: 16px 13px;
  background-color: white;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid #696969;
  font-size: 14px;
`;

const Button = styled.button`
  max-width: 100%;
  padding: 16px 13px;
  color: rgb(253, 249, 243);
  background: #506DA6;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export default function LoginForm() {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const router = useRouter()
  const { addToast } = useToasts()

  useEffect(() => {
    const email = localStorage.getItem("email")
    if (email) {
      router.push("/dashboard")
    }

  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(handleUserLogin({
      email, password,
      onSuccess: function () {
        router.push('/dashboard')
      },
      onFail: function (e) {
        addToast(e, {
          autoDismiss: true,
          appearance: "error",
        })
      }
    }))
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </>
  )
}
