import { createGlobalStyle } from "styled-components"
import SoraFont from "/fonts/Sora-VariableFont_wght.ttf?url"


export default createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    html, body, #root {
        width: 100%;
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        user-select: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #ffffff;
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: inset 0 0 20px 20px #23232329;
    }

    @font-face {
        font-family: "Sora";
        src:
            local("Sora"),
            url(${SoraFont}) format("truetype");
    }
`