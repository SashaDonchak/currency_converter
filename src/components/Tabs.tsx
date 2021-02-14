import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../theme';
import Switch from './Switch';

interface TabProps {
  key: number;
  opened: boolean;
}

const Container = styled.div`
  background: ${props => props.theme.palette.mainColor};
  box-shadow: ${props => props.theme.palette.shadow};
  border-radius: 50px;
`;

const Header = styled.div`
  width: 100%;
`;

const Toggle = styled.button<TabProps>`
  width: 50%;
  background: ${p => p.opened ? '#0096FF' : '#FFFFFF'};
  color: ${p => p.opened ? '#FFFFFF' : '#0096FF'};
  outline: none;
  border: none;
  border-radius: 50px 0 0 0;
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;
  padding: 12px;
  transition: .3s ease;
  &+& {
    border-radius: 0 50px 0 0;
  }
  &:hover{
    cursor: pointer;
    background: ${p => p.opened ? '#0096FF' : 'rgba(0, 150, 255, 0.1)'};
  }
`;

const Content = styled.div``;

const TabContent = styled.div<TabProps>`
  display: ${p => p.opened ? 'block' : 'none'};
  border-radius: 0 0 50px 50px;
  padding: 32px;
`;

const Tabs: React.FC = () => {
  const [currentTab, changeTab] = useState(1);
  const [isDark, changeTheme] = useState(false);

  return (
    <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <Container>
        <Header>
          <Toggle key={1} onClick={() => changeTab(1)} opened={currentTab === 1}>CONVERTER</Toggle>
          <Toggle key={2} onClick={() => changeTab(2)} opened={currentTab === 2}>RATES</Toggle>
        </Header>
        <Content>
          <TabContent key={1} opened={currentTab === 1}>
            <select name="" id="1">
              <option value="BYN">BYN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
            <input type="text" />
            <select name="" id="1">
              <option value="BYN">BYN</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
            <input type="text" />
          </TabContent>
          <TabContent key={2} opened={currentTab === 2}>
            second tab
          </TabContent>
        </Content>
        <Switch checked={isDark} changeSwitch={() => changeTheme(!isDark)}/>
      </Container>
    </ThemeProvider>
  );
};

export default Tabs;