import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// components
import { CommonLayout } from "components";

// configs
import { PAGE_URL } from "configs/path";

// element
import * as Switch from "pages";

const PageRouter = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={PAGE_URL.Main} element={<CommonLayout />}>
          <Route index element={<Switch.MainPage />} />
          <Route path={PAGE_URL.SignUp} element={<Switch.SignUpPage />} />
          <Route path={PAGE_URL.SignIn} element={<Switch.SignInPage />} />
          <Route path={PAGE_URL.Todo} element={<Switch.TodoPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRouter;
