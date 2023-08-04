import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <CommonWrapper>
      <Outlet />
    </CommonWrapper>
  );
};

const CommonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export default CommonLayout;
