import React from 'react';
import Label from '../Label';
import Input from '../Input';
import './styles.css';

const CarrierSettingItem = props => {
  // Can pass onChange function from parent in props to call if required to implement some business logic in parent component
  const { data } = props;
  const { id, text, value } = data;

  const onCarrierSettingItemChange = ({ event, data }) => {
    const { target: { value } = {} } = event;
    console.log(`Carrier Setting Item Changed is:- ${id} and new value is:-${value}`);
  };

  return (
    <div className='carrier-setting-item-container'>
      {/* <div> */}
      <div className='text carrier-setting-item-label'>
        <Label text={text} />
      </div>
      <div>
        <Input
          data={id}
          value={value}
          placeholder={`Enter ${text}`}
          onChangeHandler={onCarrierSettingItemChange}
          className='text carrier-setting-item-input'
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default CarrierSettingItem;
