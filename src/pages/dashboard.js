import React from 'react';
import { Card } from 'antd';

const AppDashboard = () => {
  return (
    <div className='cards'>
      <Card size="small" title="Bitcoin" extra={'Price: 45000'}  className='card'>
        <p>Quantity: 15</p>
        <p>Value $: </p>
        <p>Value PLN: </p>
        <p>Invested $: </p>
      </Card>
      <Card size="small" title="Ethereum" extra={'Price: 45000'} className='card'>
        <p>Quantity: 15</p>
        <p>Value $: </p>
        <p>Value PLN: </p>
        <p>Invested $: </p>
      </Card>
      <Card size="small" title="XRP" extra={'Price: 45000'} className='card'>
        <p>Quantity: 15</p>
        <p>Value $: </p>
        <p>Value PLN: </p>
        <p>Invested $: </p>
      </Card>
    </div>
  );
};

export default AppDashboard;
