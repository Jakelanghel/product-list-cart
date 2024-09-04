import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


@font-face {
  font-family: 'redhat'; 
  src: url('./assets/fonts/RedHatText-VariableFont_wght') format('ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'redhat-400'; 
  src: url('./assets/fonts/RedHatText-VariableFont_wght') format('ttf');
  font-weight: 600;
  
}
@font-face {
  font-family: 'redhat-600'; 
  src: url('./assets/fonts/RedHatText-VariableFont_wght') format('ttf');
  font-weight: 700;
}



    :root {
        --red: hsl(14, 86%, 42%);
        --green: hsl(159, 69%, 38%);
        --rose-50: hsl(20, 50%, 98%);
        --rose-100: hsl(13, 31%, 94%);
        --rose-300: hsl(14, 25%, 72%);
        --rose-400: hsl(7, 20%, 60%);
        --rose-500: hsl(12, 20%, 44%);
        --rose-900: hsl(14, 65%, 9%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        display: block;
    }

    body {
        background-color: rgba(252, 248, 245, 1);
        font-family: "red-hat", sans-serif;
    }


`;
