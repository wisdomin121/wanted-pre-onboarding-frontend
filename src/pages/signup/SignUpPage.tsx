/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// components
import { Button, Input } from "components";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(
        "/auth/signup",
        { email, password },
        { headers: { "Content-Type": `application/json` } }
      )
      .then(() => navigate("/signin"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, []);

  return (
    <SignUpWrapper>
      <Input
        dataTestid="email-input"
        _placeholder="이메일"
        _value={email}
        setValue={setEmail}
      />
      <Input
        dataTestid="email-input"
        _type="password"
        _placeholder="비밀번호"
        _value={password}
        setValue={setPassword}
      />
      <Button
        dataTestid="signup-button"
        text="회원가입"
        _disabled={!email.includes("@") || password.length < 8}
        _onClick={handleSubmit}
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
