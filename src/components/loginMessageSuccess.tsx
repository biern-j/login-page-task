import React from "react";

import { LoginUserTitle, LoginUserSuccess } from "./loginMessageStyle";

export type LoginProps = {
  userLogin: string;
};

export const LoginMessageSuccess = ({ userLogin }: LoginProps) => {
  return (
    <LoginUserTitle>
      Hello{" "}
      <LoginUserSuccess data-cy="welcome-title">{userLogin}</LoginUserSuccess>
      <span>You login Success!</span>
    </LoginUserTitle>
  );
};
