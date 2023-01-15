import React, {Suspense} from "react";
import {useRoutes} from "react-router-dom";
import {HomePage} from "../pages";

const Router = (): JSX.Element => {
  return useRoutes([
    {
      path: '/',
      errorElement: <div>error page</div>,
      element: <Suspense fallback={<>...</>}><HomePage/></Suspense>,
    }
  ]) as JSX.Element
}

export default Router;
