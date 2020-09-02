import React from 'react';
import styled from '@emotion/styled';
import ReferralManager from '../components/ReferralManager';
import { selectIsDemo } from '../selectors';
import { useSelector } from 'react-redux';

export const Container2Column = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    > div:first-of-type {
      width: 50%;
      margin-right: 30px;
    }
    > div:last-of-type {
      width: 50%;
    }
  }
`;

const ReferralPage = () => {
  return (
    <React.Fragment>
      <ReferralManager />
    </React.Fragment>
  );
};

export default ReferralPage;