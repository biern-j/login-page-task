import styled from "styled-components";

export const LoginPageContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
`;

export const LoginWrap = styled.section`
  width: 100%;
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 1rem;

  @media only screen and (min-device-width: 375px) {
    padding: 2rem 1rem;
    width: 95%;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    padding: 10rem 7rem 1rem 4rem;
    width: 80%;
  }

  @media only screen and (min-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    padding: 17rem 13rem 3.3rem 9.5rem;
    width: 96rem;
  }
`;

export const LoginPictureWrap = styled.picture`
  display: none;

  @media (min-width: 375px) {
    display: block;
    width: 60%;
    margin: 0 auto;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    display: block;
    width: 40%;
    margin: 5%;
  }
  @media only screen and (min-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    display: block;
    width: 50%;
  }
`;

export const LoginPicture = styled.img`
  width: 100%;
`;
