import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const { is_flex, margin, padding, bg, children, width, is_right, onClick } = props;

    const styles = {
        is_flex: is_flex,
        margin: margin,
        padding: padding, 
        bg: bg,
        width: width,
        is_right: is_right,
    }
    return (
        <React.Fragment>
            <GridBox onClick={onClick} {...styles}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}
Grid.defaultProps = {
    is_flex: false,
    is_right: false,
    margin: false,
    padding: false,
    bg: false,
    width: '100%',
    onClick: () => {},
} 

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    box-sizing: border-box;
    ${(props) => props.margin ? `margin : ${props.margin}`: ''};
    ${(props) => props.padding? `padding: ${props.padding}`: ''};
    ${(props) => props.bg ? `background-color: ${props.bg}`: ''};
    ${(props) => props.is_flex? `display: flex; aligin-items: center; justify-content: space-between;`: ''};
    ${(props) => props.is_right ? `display: flex; align-items: center; justify-content: flex-end;` : ''};
`

export default Grid;
