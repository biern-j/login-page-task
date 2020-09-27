import React, { useState } from "react";

import { LoginWrap, LoginPictureWrap, LoginPicture } from "./loginWrapperStyle";
import { LoginForm } from "./loginForm";
import { LoginMessageSuccess } from "./loginMessageSuccess";

export const LoginWidget = () => {
  const [userLogin, setUserLogin] = useState<string | undefined>();
  return (
    <LoginWrap>
      <LoginPictureWrap>
        <LoginPicture src="./src/assets/img-01.png" alt="login-img" />
      </LoginPictureWrap>

      {userLogin ? (
        <LoginMessageSuccess userLogin={userLogin} />
      ) : (
        <LoginForm loginResult={(result: string) => setUserLogin(result)} />
      )}
    </LoginWrap>
  );
};
