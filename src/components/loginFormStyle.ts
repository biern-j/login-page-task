import styled from "styled-components";

export const Form = styled.form`
  width: 45%;
`;

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
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

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem; /*2rem because we want it in the same position what is the placeholder in input place*/
  margin-top: 0.7rem;
  display: block; /*with out display: block we can't set properties which manipulating width or height */
  transition: all 0.3s;
`;

export const Input = styled.input`
  font-family: Poppins-Medium;
  line-height: 1.5;
  color: #666666;

  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  padding: 0 3rem 0 7rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 2.5rem;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;

  &::-webkit-input-placeholder {
    color: gray;
  }
  &:focus {
    outline: none; /*never left input without pointing which input box is active. You can replace default outline style by box shadow amd border-bottom: ; property */
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
    border-bottom: 3px solid green;
  }
  &:focus:invalid {
    border-bottom: 0.3rem solid red;
  }

  &:placeholder-shown + ${FormGroup} {
    /*if placeholder is focused we want see nothing in side input. In this case we don't want see label in side input*/
    opacity: 0;
    visibility: hidden; /*it really gone. If we left only opacity: 0; the element will be still on the page, but only invisible. So with visibility: hidden it really gone. So why don't use just visibility property? Because visibility property isn't animate, but we want animate the effect with this placeholder by transition.*/
    transform: translateY(-4rem);
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
`;

export const Button = styled.button`
  font-family: Montserrat-Bold;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;

  width: 100%;
  height: 5rem;
  border-radius: 2.5rem;
  background: #57b846;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  &:hover {
    background: #333333;
  }
`;
