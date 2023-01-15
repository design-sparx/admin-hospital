import React, {Suspense} from "react";
import {useRoutes} from "react-router-dom";
import {HomePage, LoginPage, RegisterPage, ResetPasswordPage} from "../pages";

const Router = (): JSX.Element => {
  return useRoutes([
    {
      path: '/',
      errorElement: <div>error page</div>,
      element: <Suspense fallback={<>...</>}><HomePage/></Suspense>,
    },
    {
      path: 'login',
      errorElement: <div>error page</div>,
      element: <Suspense fallback={<>...</>}><LoginPage/></Suspense>,
    },
    {
      path: 'signup',
      errorElement: <div>error page</div>,
      element: <Suspense fallback={<>...</>}><RegisterPage/></Suspense>,
    },
    {
      path: 'reset-password',
      errorElement: <div>error page</div>,
      element: <Suspense fallback={<>...</>}><ResetPasswordPage/></Suspense>,
    }
  ]) as JSX.Element
}

export default Router;
