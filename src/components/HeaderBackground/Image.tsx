import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  min-height: 200px;

  body[data-theme='dark'] & {
    background-image: url('/images/bg-mobile-dark.jpg');
  }

  body[data-theme='light'] & {
    background-image: url('/images/bg-mobile-light.jpg');
  }

  @media (min-width: 375px) {
    min-height: 300px;
    
    body[data-theme='dark'] & {
      background-image: url('/images/bg-desktop-dark.jpg');
    }

    body[data-theme='light'] & {
      background-image: url('/images/bg-desktop-light.jpg');
    }
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    border-radius: 0 0 var(--radii) var(--radii);
  }
`;

export {Img};