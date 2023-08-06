import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import { Button, Input } from "components";

// apis
import { handleSignUp, handleSignIn } from "apis";

// types
import { ISign } from "types";

const SignUpInLayout = ({ isSignUp = true }: ISign) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  // 리다이렉트
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <SignUpInWrapper>
      <Input
        dataTestid="email-input"
        _placeholder="이메일"
        _value={email}
        setValue={setEmail}
      />
      <Input
        dataTestid="password-input"
        _type="password"
        _placeholder="비밀번호"
        _value={password}
        setValue={setPassword}
      />
      <Button
        dataTestid={isSignUp ? "signup-button" : "signin-button"}
        text={isSignUp ? "회원가입" : "로그인"}
        _disabled={isSignUp && (!email.includes("@") || password.length < 8)}
        _onClick={() => {
          isSignUp
            ? handleSignUp({ email, password, setErrorText })
            : handleSignIn({ email, password, setErrorText });
        }}
      />
      <p>{errorText}</p>
    </SignUpInWrapper>
  );
};

const SignUpInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    text-align: center;
    color: red;
  }
`;

export default SignUpInLayout;
