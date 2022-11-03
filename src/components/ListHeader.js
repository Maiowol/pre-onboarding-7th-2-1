import React, { useState } from 'react'
import styled from 'styled-components'

export default function ListHeader({ first, second, third }) {
    const [text, setText] = useState([
        { id: '1', name: '차량 정보' },
        { id: '2', name: '보험' },
        { id: '3', name: '추가상품' },
    ])
    return (
        <>
            {first && <List>{text[0].name}</List>}
            {second && <List>{text[1].name}</List>}
            {third && <List>{text[2].name}</List>}
        </>
    )
}

const List = styled.p`
height: 30px;
background: #0094FF;
color: white;
font-weight: bolder;
padding-top: 12px;
padding-left: 15px;
`;


