import React, {useState} from "react";
import HeaderContainer from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form}  from '../components';



export default function Signin() {

  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');


  // check form input elements are valid
  // email & password


  const isInvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) || password === '';

  const handleSignin = (event) => {
    event.preventDefault();

    //firebase work here
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />

    </>
  )
}
