import React from 'react';
import CarrierSettingItem from '../CarrierSettingItem';
import './styles.css';

const CarrierSettings = props => {
  const { data = [] } = props;

  return (
    <div className='carrier-setting-container'>
      <p className='carrier-settings-heading'>Carrier Settings</p>
      <p className='line-1' />
      <div className='carrier-setting-item-container'>
        {data.map(item => {
          const { id } = item;
          return <CarrierSettingItem key={id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default CarrierSettings;
