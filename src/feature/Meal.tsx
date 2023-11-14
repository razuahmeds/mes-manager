import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import {  InputNumber, Select, Space } from 'antd';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

function Meal( ) {
  return (
    <div style={{ maxWidth: 600, margin: '100px' }}>
        <h2>MEAl</h2>
         <Space direction="vertical">
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={0} />
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={0} />
    <InputNumber addonAfter={<SettingOutlined />} defaultValue={0} />
    
  </Space>
    </div>
  )
}

export default Meal