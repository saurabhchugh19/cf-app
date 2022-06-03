import React from 'react';
import withLayout from '../../components/Layout';
import Label from '../../components/Label';
import Input from '../../components/Input';
import mockData from '../../mock/data.json';
import CarrierSettings from '../../components/CarrierSettings';
import './styles.css';

const UserSettings = () => {
  const { name, email, carrierSettings } = mockData;

  // Below 2 functions can be combined as well depending upon requirement, just keeping them segregated for better readability
  const onNameChange = ({ event }) => {
    const { target: { value = '' } = {} } = event;
    console.log('Changed name is:- ', value);
  };

  const onEmailChange = ({ event }) => {
    const { target: { value = '' } = {} } = event;
    console.log('Changed email is:- ', value);
  };

  return (
    <div className='user-setting-container'>
      <h2>User Settings</h2>
      <div>
        <Label text='Name' />
        <Input value={name} placeholder='Enter Name' onChangeHandler={onNameChange} />
      </div>
      <div>
        <Label text='Email' />
        <Input value={email} placeholder='Enter Email' onChangeHandler={onEmailChange} />
      </div>
      <div>
        <CarrierSettings data={carrierSettings} />
      </div>
    </div>
  );
};

export default withLayout(UserSettings);
