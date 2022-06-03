import React from 'react';
import CarrierSettingItem from '../CarrierSettingItem';
// import './styles.css';

const CarrierSettings = props => {
  const { data = [] } = props;

  return (
    <>
      <h3>Carrier Settings</h3>
      <div>
        {data.map(item => {
          const { id } = item;
          return <CarrierSettingItem key={id} data={item} />;
        })}
      </div>
    </>
  );
};

export default CarrierSettings;
