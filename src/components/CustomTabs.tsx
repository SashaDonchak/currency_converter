import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const CustomTabs: React.FC = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Converter" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Rates" key="2">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
);

export default CustomTabs;