import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --black:#000814;
        --white:#F8F9FA;
        --orange:#F3722C;
        --l-blue:#43BCCD;
        --blue:#0d60b2;
        --red:#FF0054;

    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif; 
        background: var(--white);
        color: var(--black);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
    }
    h1,h2,h3,h4,p{
        margin: 0;
        padding: 0;
    }
` 

export default GlobalStyle 