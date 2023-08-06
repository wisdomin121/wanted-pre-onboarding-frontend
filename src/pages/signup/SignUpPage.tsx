import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import { Button, Input } from "components";

// apis
import { handleSignUp } from "apis";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 리다이렉트
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <SignUpWrapper>
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
        dataTestid="signup-button"
        text="회원가입"
        _disabled={!email.includes("@") || password.length < 8}
        _onClick={() => {
          handleSignUp({ email, password });
        }}
      />
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default SignUpPage;
