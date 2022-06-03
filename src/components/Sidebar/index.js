import React from 'react';
import { SIDEBAR_LIST } from './constants';
import Anchor from '../../components/Anchor';
import './styles.css';

const Sidebar = props => {
  return (
    <div className='sidebar-container'>
      {SIDEBAR_LIST.sort((x, y) => x.sortOrder - y.sortOrder).map(item => {
        const { id, text, url } = item;
        return <Anchor key={id} text={text} url={url} />;
      })}
    </div>
  );
};

export default Sidebar;
