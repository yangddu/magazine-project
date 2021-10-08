import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { width, height, margin, padding, text, bg, radius, color, onClick, is_float, children } = props;

    if(is_float) {
        return (
          <React.Fragment>
            <FloatButton onClick={onClick}>{text? text: children}</FloatButton>
          </React.Fragment>
        )
      }

    const styles = {
        width: width,
        margin: margin,
        padding: padding,
    }


    return (
        <React.Fragment>
            <ElButton {...styles} onClick={onClick}>
                {text ? text:children}
            </ElButton>
        </React.Fragment>
    );
}
Button.defaultProps = {
    text: '텍스트',
    is_float: false,
    width: '100%',
    height: '100%',
    margin: false,
    padding: "12px 0",
    bg: false,
    color: false,
    onClick: () => {},
    radius: false,
}


const ElButton = styled.button`
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
    padding: ${(props) => props.padding};
    background: #212121;
    color: #fff;

    &:hover {
        background: #d3d3d3;
        color: #212121;
    }
`

const FloatButton = styled.button`
    position: fixed;
    right: 16px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background-color: #f9e000;
    box-sizing: border-box;
    font-weight: 800;
    font-size: 36px;
    border: none;
    border-radius: 50px;
    color: #212121;
`
export default Button;
