import React from 'react';
import Label from '../Label';
import Input from '../Input';

const CarrierSettingItem = props => {
  // Can pass onChange function from parent in props to call if required to implement some business logic in parent component
  const { data } = props;
  const { id, text, value } = data;

  const onCarrierSettingItemChange = ({ event, data }) => {
    const { target: { value } = {} } = event;
    console.log(`Carrier Setting Item Changed is:- ${id} and new value is:-${value}`);
  };

  return (
    <>
      <Label text={text} />
      <Input data={id} value={value} placeholder={`Enter ${text}`} onChangeHandler={onCarrierSettingItemChange} />
    </>
  );
};

export default CarrierSettingItem;
