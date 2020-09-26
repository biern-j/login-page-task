import styled, { css } from "styled-components";

import { AlertValidateInput } from "./alertValidationStyle";

export const Form = styled.form`
  width: 45%;
`;

export const FormGroup = styled.div<{
  validationAlert: boolean;
  validationMessage: string;
}>`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  ${({ validationAlert, validationMessage }) =>
    validationAlert && AlertValidateInput(validationMessage)}
`;

export const FormTitle = styled.h1`
  span {
    font-family: Poppins-Bold;
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;

    width: 100%;
    display: block;
    padding-bottom: 5.5rem;
  }
`;

export const SymbolInputWrapper = styled.span`
  font-size: 15px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  color: #666666;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;

export const FocusInput = styled.label`
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(87, 184, 70, 0.8);
`;

export const Input = styled.input`
  font-family: Poppins-Medium;
  line-height: 1.5;
  color: #666666;

  position: relative;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 5rem;
  padding: 0 3rem 0 7rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 2.5rem;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;

  &:focus + ${FocusInput} {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  &:focus + ${FocusInput} + ${SymbolInputWrapper} {
    color: #57b846;
    padding-left: 28px;
  }

  &:focus:invalid {
    border-bottom: 0.3rem solid red;
  }

  &:placeholder-shown + ${FormGroup} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;
