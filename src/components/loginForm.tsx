import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import {
  Form,
  FormGroup,
  FormTitle,
  Label,
  Input,
  ButtonWrapper,
  Button,
} from "./loginFormStyle";
import {
  TextWrapper,
  TextLink,
  TextCenter,
  TextCenterTop,
} from "../indexStyle";

export const LoginForm = () => (
  <Form>
    <FormTitle>
      <span>Member Login</span>
    </FormTitle>
    <FormGroup>
      <Input id="email" type="text" name="email" placeholder="Email" required />
      <Label htmlFor="email">&nbsp;</Label>
    </FormGroup>

    <FormGroup>
      <Input
        id="password"
        type="password"
        name="passport"
        placeholder="Password"
        required
      />
      <Label htmlFor="password">&nbsp;</Label>
    </FormGroup>
    <ButtonWrapper>
      <Button>Login</Button>
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
