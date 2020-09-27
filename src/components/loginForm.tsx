import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  Form,
  FormGroup,
  FormTitle,
  FocusInput,
  SymbolInputWrapper,
  Input,
} from "./loginFormStyle";
import { ButtonWrapper, InputButton } from "./button";
import {
  TextWrapper,
  TextLink,
  TextCenter,
  TextCenterTop,
} from "../indexStyle";

import {
  emailValidationRegex,
  passwordValidationRegex,
  validateRegex,
} from "../lib/validation";

import { loginUserRequest } from "../lib/mockServer";

export const LoginForm = () => {
  const [passwordInput, setPasswordInput] = useState({
    input: "",
    validationAlert: false,
  });
  const [emailInput, setEmailInput] = useState({
    input: "",
    validationAlert: false,
  });

  // state clean form
  // state loading on submit form
  // state error: unauthorized / server error

  return (
    <Form>
      <FormTitle>
        <span>Member Login</span>
      </FormTitle>
      <FormGroup
        validationAlert={emailInput.validationAlert}
        validationMessage={"Valid email is required: ex@abc.xyz"}
      >
        <Input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => {
            e.preventDefault();

            const isValid = validateRegex(e.target.value, emailValidationRegex);

            setEmailInput({
              input: e.target.value,
              validationAlert: !isValid,
            });
          }}
        />
        <FocusInput htmlFor="email">&nbsp;</FocusInput>
        <SymbolInputWrapper>
          <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
        </SymbolInputWrapper>
      </FormGroup>

      <FormGroup
        validationAlert={passwordInput.validationAlert}
        validationMessage={"Password is required"}
      >
        <Input
          id="password"
          type="password"
          name="passport"
          placeholder="Password"
          required
          onChange={(e) => {
            e.preventDefault();
            const isValid = validateRegex(
              e.target.value,
              passwordValidationRegex
            );

            setPasswordInput({
              input: e.target.value,
              validationAlert: !isValid,
            });
          }}
        />
        <FocusInput htmlFor="password">&nbsp;</FocusInput>
        <SymbolInputWrapper>
          <FontAwesomeIcon icon={faLock} aria-hidden="true" />
        </SymbolInputWrapper>
      </FormGroup>
      <ButtonWrapper>
        <InputButton
          type="button"
          role="button"
          value="Login"
          name="loginUser"
          disabled={emailInput.validationAlert || passwordInput.validationAlert}
          onClick={(e) => {
            e.preventDefault();
            loginUserRequest(emailInput.input, passwordInput.input).catch();
          }}
        />
      </ButtonWrapper>

      <TextCenter>
        <TextWrapper>Forgot</TextWrapper>
        <TextLink href="#">Username / Password?</TextLink>
      </TextCenter>

      <TextCenterTop>
        <TextLink href="#">
          Create your Account
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </TextLink>
      </TextCenterTop>
    </Form>
  );
};
