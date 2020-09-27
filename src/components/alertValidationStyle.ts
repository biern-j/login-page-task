import styled, { css } from "styled-components";

export const AlertValidateInput = (validationMessage: string) => css`
  &::before {
    content: ${validationMessage};
    position: absolute;
    max-width: 70%;
    background-color: white;
    border: 1px solid #c80000;
    border-radius: 13px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 8px;
    pointer-events: none;

    font-family: Poppins-Medium;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  &::after {
    content: "\f06a";
    font-family: FontAwesome;
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 13px;
  }

  &:hover:before {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const validationStyle = `
  max-width: 70%;
  background-color: white;
  border: 1px solid #c80000;
  border-radius: 13px;
  padding: 4px 25px 4px 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8px;
  pointer-events: none;

  font-family: Poppins-Medium;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
`;
export const ValidationMessage = styled.span`
  ${validationStyle}
`;
