import React from 'react';
import CarrierSettingItem from '../CarrierSettingItem';

const CarrierSettings = props => {
  const { data = [] } = props;

  return (
    <>
      <div>Carrier Settings</div>
      {data.map(item => {
        const { id } = item;
        return <CarrierSettingItem key={id} data={item} />;
      })}
    </>
  );
};

export default CarrierSettings;
