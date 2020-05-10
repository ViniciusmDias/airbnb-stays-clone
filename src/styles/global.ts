import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, button {
    font: 11px 'Montserrat', sans-serif;
    color: rgb(34, 34, 34);

    @media (min-width: 760px) {
      font: 14px;
    }
    @media (min-width: 1024px) {
      font: 16px;
    }
  }
  button {
    cursor: pointer;
    font-size: 1rem;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }
  h4 {
    font-size: 0.8rem;
    color: rgb(113, 113, 113);
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  a {
    font-weight: 600;
    color: #000;
    font-size: 0.8rem;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  input {
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap !important;
    line-height: 16px;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  p {
    font-size: 0.8rem;
  }

`;
