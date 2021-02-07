import React from 'react';
import styled from 'styled-components';
import Tabs from './components/Tabs';
import './App.css';

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto;
  padding: 32px;
`;

const Title = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;
`;

const App: React.FC = () => (
  <Container>
    <Title>Currency converter</Title>
    <Tabs/>
  </Container>
);

export default App;
