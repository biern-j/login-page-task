import React from "react";

export type LoginProps = {
  userLogin: string;
};

export const LoginMessageSuccess = ({ userLogin }: LoginProps) => {
  return <div>User {userLogin} login Success!</div>;
};
