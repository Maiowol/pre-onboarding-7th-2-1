import React from 'react'
import styled from 'styled-components'
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function HeaderBar({ isEdit }) {
  return (
    <>
      <Header>
        {!isEdit ?
          <h3>전체차량</h3> :
          <DetailsHeader>
            <Link to={'/'}>
              <BiArrowBack
                className='icon' />
            </Link>
            <h3>차량상세</h3>
          </DetailsHeader>
        }
        <hr />
      </Header>
    </>
  )
}
const Header = styled.div`
text-align: center;
`
const DetailsHeader = styled.div`
display: flex;

.icon {
  display: flex;
  margin-top: 24px;
  margin-left: 10px;
}

h3{
  margin: 0;
  margin-left: 170px;
  margin-bottom: 10px;
  padding-top: 20px;
}
`;

