import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: #f8f8f8;
  }

  .calculator-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .calculator-box {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  }

  .calculator-box h2 {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
  }

  .calculator-box label {
    display: block;
    margin-top: 8px;
    font-weight: bold;
  }

  .calculator-box input {
    margin-left: 8px;
    width: 60px;
    padding: 3px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .calculator-box p {
    margin: 5px 0;
  }
`;
