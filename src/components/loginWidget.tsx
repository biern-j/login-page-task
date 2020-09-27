import React, { useState } from "react";

import {
  LoginPageContainer,
  LoginWrap,
  LoginPictureWrap,
  LoginPicture,
} from "./loginWrapperStyle";

import { LoginForm } from "./loginForm";
import { LoginMessageSuccess } from "./loginMessageSuccess";

export const LoginWidget = () => {
  const [userLogin, setUserLogin] = useState<string | undefined>();
  return (
    <LoginPageContainer>
      <LoginWrap>
        {userLogin ? (
          <LoginMessageSuccess userLogin={userLogin} />
        ) : (
          <>
            <LoginPictureWrap>
              <LoginPicture src="./assets/img-01.png" alt="login-img" />
            </LoginPictureWrap>
            <LoginForm loginResult={(result: string) => setUserLogin(result)} />
          </>
        )}
      </LoginWrap>
    </LoginPageContainer>
  );
};
