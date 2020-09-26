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
import { ButtonWrapper, Button } from "./button";
import {
  TextWrapper,
  TextLink,
  TextCenter,
  TextCenterTop,
} from "../indexStyle";

import {
  emailValidationRegex,
  passwordValidationRegex,
} from "../assets/validation";

export const LoginForm = () => {
  const [passwordInput, setPasswordInput] = useState({
    input: "",
    validationAlert: false,
  });
  const [emailInput, setEmailInput] = useState({
    input: "",
    validationAlert: false,
  });

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
            console.log(
              "validation(e.target.value, emailValidationRegex)",
              validation(e.target.value, emailValidationRegex)
            );
            if (validation(e.target.value, emailValidationRegex)) {
              setEmailInput({
                input: e.target.value,
                validationAlert: false,
              });
            } else {
              setEmailInput({
                input: e.target.value,
                validationAlert: true,
              });
            }
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
            console.log(
              "password validation",
              validation(e.target.value, passwordValidationRegex)
            );
            if (validation(e.target.value, passwordValidationRegex)) {
              setPasswordInput({
                input: e.target.value,
                validationAlert: false,
              });
            } else {
              setPasswordInput({
                input: e.target.value,
                validationAlert: true,
              });
            }
          }}
        />
        <FocusInput htmlFor="password">&nbsp;</FocusInput>
        <SymbolInputWrapper>
          <FontAwesomeIcon icon={faLock} aria-hidden="true" />
        </SymbolInputWrapper>
      </FormGroup>
      <ButtonWrapper>
        <Button
          disabled={emailInput.validationAlert || passwordInput.validationAlert}
        >
          Login
        </Button>
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

const validation = (input: string, validationRegex: RegExp) =>
  validationRegex.test(input.trim());
