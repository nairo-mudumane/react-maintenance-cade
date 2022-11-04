import { createGlobalStyle } from "styled-components";
import bg from "../assets/background.jpg";

export const GlobalStyles = createGlobalStyle`
  body {
    color: "#fff";
    width: 100%;
    min-height: 100vh;

    background-image: url(${bg});
    background-position: center;
    background-size: fit;
    background-repeat: repeat;
  }
`;
