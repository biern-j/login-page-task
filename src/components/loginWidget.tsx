import React from "react";

import { LoginWrap, LoginPictureWrap, LoginPicture } from "./loginWrapperStyle";
import { LoginForm } from "./loginForm";

export const LoginWidget = () => (
  <LoginWrap>
    <LoginPictureWrap>
      <LoginPicture src="./src/assets/img-01.png" alt="login-img" />
    </LoginPictureWrap>
    <LoginForm />
  </LoginWrap>
);
