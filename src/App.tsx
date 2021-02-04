import React from 'react';
import CustomTabs from './components/CustomTabs';
import "antd/dist/antd.css";
import './App.css';
import { Layout } from 'antd';

const { Content } = Layout;

const App: React.FC = () => (
  <Layout>
    <Content className="container">
      <CustomTabs />
    </Content>
  </Layout>
);

export default App;
