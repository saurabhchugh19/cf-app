import React from 'react';
import { SIDEBAR_LIST } from './constants';
import Anchor from '../../components/Anchor';
import './styles.css';

const Sidebar = props => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-heading sidebar-text'>SettingsPro</div>
      {SIDEBAR_LIST.sort((x, y) => x.sortOrder - y.sortOrder).map(item => {
        const { id, text, url } = item;
        return <Anchor key={id} text={text} url={url} className='sidebar-text sidebar-route' />;
      })}
    </div>
  );
};

export default Sidebar;
