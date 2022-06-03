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
      {/* <div className='header'> */}
      <p className='user-setting-heading'>User Settings</p>
      <p className='line-2' />
      {/* </div> */}
      <div className='user-setting-name'>
        <div className='text'>
          <Label text='Name' />
        </div>
        {/* <div> */}
        <Input
          value={name}
          placeholder='Enter Name'
          onChangeHandler={onNameChange}
          className='user-settings-input text'
        />
        {/* </div> */}
      </div>
      <div className='user-setting-email'>
        <div className='text'>
          <Label text='Email' />
        </div>
        {/* <div> */}
        <Input
          value={email}
          placeholder='Enter Email'
          onChangeHandler={onEmailChange}
          className='user-settings-input text'
        />
        {/* </div> */}
      </div>
      <div className='carrier-settings'>
        <CarrierSettings data={carrierSettings} />
      </div>
    </div>
  );
};

export default withLayout(UserSettings);
