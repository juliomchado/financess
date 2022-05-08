import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
       --background-color: #fafafa;
       --background-sections-color: #ffffff;

       --separator-color: #EAEAEA;

       --primary-text-color: #212121;
       --secondary-text-color: #424242;
       --tertiary-text-color: #9E9E9E;
       --text-dif-color: #ffffff;

       --primary-color: #212121;

       --income-color: #8BC34A;
       --outcome-color: #F44336;
    }

    html {
        font-size: 62.5%; // 1rem = 10px
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body{
        background-color: var(--background-color);
    }

    body,
    input,
    textarea,
    select, 
    button {
        font: 400 1.6rem "Roboto", monospace;
    }

    button {
        cursor: pointer;
        outline: transparent;
    }

    textarea:focus, input:focus{
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export {GlobalStyle};
