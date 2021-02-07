import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
`;

const Toggle = styled.button`
  width: 50%;
  background: none;
  border: 1px solid #0096FF;
  border-radius: 0;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  padding: 12px;
`;

const Tabs: React.FC = () => {
  return (
    <div>
      <Header>
        <Toggle>CONVERTER</Toggle>
        <Toggle>RATES</Toggle>
      </Header>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Tabs;