import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Alfa+Slab+One&display=swap");
    ${normalize}
* {
    transition: background .2s, color .2s;
}
`;
