import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";

const LogoStyled = styled("div")`
    display: block;
    color: ${colors.grey800};
    padding: 0 15px;

    font-family: 'Poiret One', cursive;
    font-size: 1.75em;
    font-weight: 600;

`

const Logo = () => (
    <LogoStyled>
        JeffYeung
    </LogoStyled>
);

export default Logo;
