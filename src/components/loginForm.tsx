import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faLock,
  faEnvelope,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import {
  Form,
  FormGroup,
  FormTitle,
  FocusInput,
  Input,
} from "./loginFormStyle";
import { ButtonWrapper, InputButton, SymbolLoaderWrapper } from "./button";
import { ValidationMessage } from "./alertValidationStyle";
import { SymbolInputWrapper } from "./symbolStyle";
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

type PropsType = {
  loginResult: (response: string) => void;
};

type FormState = "clean" | "loading" | "unauthorized" | "error";

export const LoginForm = ({ loginResult }: PropsType) => {
  const [passwordInput, setPasswordInput] = useState({
    input: "",
    validationAlert: false,
  });
  const [emailInput, setEmailInput] = useState({
    input: "",
    validationAlert: false,
  });
  const [formState, setFormState] = useState<FormState>("clean");

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
          value={emailInput.input}
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => {
            e.preventDefault();

            const isValid = validateRegex(e.target.value, emailValidationRegex);

            setFormState("clean");
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
          value={passwordInput.input}
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
            setFormState("clean");

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
      {formState === "unauthorized" && (
        <TextCenter>
          <ValidationMessage>Wrong email or password</ValidationMessage>
        </TextCenter>
      )}
      {formState === "error" && (
        <TextCenter>
          <ValidationMessage>Oops! Unexpected error</ValidationMessage>
        </TextCenter>
      )}
      <ButtonWrapper>
        <InputButton
          loading={formState === "loading"}
          type="button"
          role="button"
          value={formState === "loading" ? "Loading..." : "Login"}
          name="loginUser"
          disabled={emailInput.validationAlert || passwordInput.validationAlert}
          onClick={async (e) => {
            e.preventDefault();
            setFormState("loading");
            const response = await loginUserRequest(
              emailInput.input,
              passwordInput.input
            ).catch(() => undefined);
            console.log("emailInput.input ", emailInput.input);
            console.log("response ", response);
            if (response?.status === 200) {
              loginResult(emailInput.input);
            } else if (response?.status === 401) {
              setPasswordInput({ input: "", validationAlert: false });
              setFormState("unauthorized");
            } else {
              setFormState("error");
            }
          }}
        />
        {formState === "loading" && (
          <SymbolLoaderWrapper>
            <FontAwesomeIcon icon={faSpinner} aria-hidden="true" />
          </SymbolLoaderWrapper>
        )}
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
