import React, { Component } from 'react';
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import { motion } from "framer-motion";

const ButtonContainer = styled(motion.button)`
    padding: 1em 2em;
    background: white;
    font-weight: 600;
    color: ${colors.blue500};
    outline: none;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${colors.blue400};
    position: relative;
    transition: background 100ms ease-in-out;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        padding: 0.8em 1.8em;
        font-size: 1em;
    }

    p {
        margin: 0;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        border: 0.1rem solid 
        width: 100%;
        height: 100%;
        background: white;
        color: ${colors.blue400};
        z-index: -1;
    }

    &:hover {
        cursor: pointer;
        background: ${colors.blue200};
        color: ${colors.blue700}
        transition: background 100ms ease-in-out;
    }

    &.Button--secondary {
        background: white;
        border: 0.1rem solid ${colors.orange400};
        color: ${colors.orange600};
        padding: 0.95em 1.8em;
        font-size: 0.95rem;
        transition: background 100ms ease-in-out;

        &:hover {
            background: ${colors.orange100};
            color: ${colors.orange300}
            transition: background 100ms ease-in-out;
        }
    }
`

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <ButtonContainer
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </ButtonContainer>
        );
    }
}

export default Button;