import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { width, height, margin, padding, text, bg, radius, color } = props;

    const styles = {
        text: text,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        bg: bg,
        radius: radius,
        color: color,
    }
    return (
        <React.Fragment>
            <ElButton {...styles}>
                {text}
            </ElButton>
        </React.Fragment>
    )
}
Button.defaultProps = {
    text: '텍스트',
    is_float: false,
    width: '100%',
    height: '100%',
    margin: false,
    padding: false,
    bg: false,
    color: false,
    onClick: () => {},
    radius: false,
}


const ElButton = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    ${(props) => props.margin ? `margin: ${props.margin}` : ''};
    ${(props) => props.padding ? `padding: ${props.padding}` : ''};
    ${(props) => props.bg ? `background-color : ${props.bg}` : ''};
    ${(props) => props.color ? `color : ${props.color}` : ''};
    ${(props) => props.radius? `border-radius : ${props.radius}` : ''};
    box-sizing: border-box;
    border: none;
    text-align: center;
    padding: 14px;

    &:hover {
        background: #d3d3d3;
        color: #212121;
    }
`
export default Button;
