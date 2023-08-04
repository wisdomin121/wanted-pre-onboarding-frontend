import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PAGE_URL } from "../configs/path";
import { CommonLayout } from "components";

const PageRouter = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={PAGE_URL.Main} element={<CommonLayout />}></Route>
      </Routes>
    </>
  );
};

export default PageRouter;
