import React, { useState } from 'react'
import styled from 'styled-components'
import NoCar from '../pages/NoCar'

function Tag({ category, onSelect }) {
    const [categories, setCategories] = useState([
        { name: '전체', segment: 'all'},
        { name: '대형', segment: 'SUV' },
        { name: '중형', segment: 'D' },
        { name: '소형', segment: 'C' },
        // { name: '전기' }
    ])
    
    if (!category) {
        return <NoCar />
      }
    
    return (
        <Tags>
            {categories.map((item, index) =>
                <li
                    className='default'
                    key={item.segment}
                    onClick={() => onSelect(item.segment)}
                    >
                    {item.name}
                </li>
            )}
        </Tags>
    )
}

const Tags = styled.ul`
display: flex;
justify-content: center;
align-items: center;
margin: 0;
margin-right: 10px;
cursor: pointer;

.default {
    width: 57px;
    height: 25px;
    background-color: #D9D9D9;
    border: 1px solid #D9D9D9;
    border-radius: 80px;
    color: #000000;
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    margin-right: 8px;
}

.default:hover {
    background: #000000;
    color: #FFFFFF;
}

// .selected {
//     width: 58px;
//     height: 23px;
//     background: #000000;
//     border: 1px solid #000000;
//     border-radius: 20px;
//     color: #FFFFFF;
//     font-style: normal;
//     font-size: 14px;
//     line-height: 18px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: bolder;
// }
`;

export default Tag
