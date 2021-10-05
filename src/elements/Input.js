import React from 'react'
import styled from 'styled-components';

import {Text, Grid} from './index';

const Input = (props) => {

    const { label, multiLine, placeholder, type, value, onChange } = props;
    
    if(multiLine){
        return (
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElTextarea
                    rows={10}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                >
                </ElTextarea>
            </Grid>
        )
    }

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElInput 
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                />
            </Grid>
        </React.Fragment>
    )
}
Input.defaultProps = {
    multiLine: false,
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요',
    type: 'text',
    value: '',
    onChange: () => {},
}

const ElInput = styled.input`
    border: 1px solid #808080;
    border-radius: 4px;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`

const ElTextarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`

export default Input;
