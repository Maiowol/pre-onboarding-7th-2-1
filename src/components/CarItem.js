import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CarItem(props) {
    const { cars } = props
    return (
        <>
            {cars.map((item) =>
                <Link to={`/cars/${item.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <Container to={`/cars/${item.id}`}
                        key={item.attribute.segment}>
                        <div className='text'>
                            <div className='text_title'>
                                <p >{item.attribute.brand}</p>
                                <p>{item.attribute.name}</p>
                            </div>
                            <div className='content'>
                                <p>{item.attribute.segment}/
                                    {item.attribute.fuelType}</p>
                                <p>월 {item.amount.toLocaleString()}원 부터</p>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={item.attribute.imageUrl} />
                        </div>
                    </Container>
                    <hr style={{ border: 'solid 0.5px black' }} />
                </Link>
            )
            }
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

.text {
 margin-left: 40px;
 margin-right: 40px;
}

.text_title > p {
 margin:0;
 font-size: 14px;
 font-weight: bolder;
 color: black;
}

.content > p {
 margin:0;
 margin-top: 5px;
 font-size: 12px;
 color: black;
}

.image {
    background: lightgray;
    display: flex;
    width: 152px;
    height: 80px;
}
`;
export default CarItem
