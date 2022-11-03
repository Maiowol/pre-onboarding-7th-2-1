import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import moment from 'moment';
import ListHeader from '../components/ListHeader';
import styled from 'styled-components';
import HeaderBar from '../components/HeaderBar';

function CarDetail() {
  const [detail, setDetail] = useState();
  const [attribute, setAttribute] = useState();

  let { id } = useParams();

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await
          axios.get(`https://preonboarding.platdev.net/api/cars?id=${id}`,
          );

        const data = response.data.payload[id - 1]
        const attribute = data.attribute
      
        setDetail(data)
        setAttribute(attribute)
 
      } catch (error) {
        // console.log(error);
      }
    }
    fetchDatas()
  }, []);

  return (
    <>
      <HeaderBar isEdit={true} />
      <Container>
        <div className='image'>
          <img src={attribute?.imageUrl} />
        </div>
        <div className='text_title'>
          <p>{attribute?.brand}</p>
          <p>{attribute?.name}</p>
        </div>

        <div>
          <p>월 {detail?.amount.toLocaleString()}원</p>
        </div>
        <ListHeader
          first={1}
        />
        <p>차종 {attribute?.segment}</p>
        <p>연료 {attribute?.fuelType}</p>
        <p>이용 가능일 {moment(detail?.startDate).format('MM월 DD일(dd) 부터')}</p>
        <ListHeader
          second={2}
        />
        <p>대인 {detail?.insurance[0].description}</p>
        <p>대물 {detail?.insurance[1].description}</p>
        <ListHeader
          third={3} />
        <p>하이파킹 주차권 {detail?.additionalProducts[0].amount.toLocaleString()}</p>
      </Container>
    </>
  )
}

const Container = styled.div`

img {
 height: 270px;
}
`;


export default CarDetail
