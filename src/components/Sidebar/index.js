import React from 'react';
import { SIDEBAR_LIST } from './constants';
import Anchor from '../../components/Anchor';

const Sidebar = props => {
  return (
    <>
      {SIDEBAR_LIST.sort((x, y) => x.sortOrder - y.sortOrder).map(item => {
        const { id, text, url } = item;
        return <Anchor key={id} text={text} url={url} />;
      })}
    </>
  );
};

export default Sidebar;
