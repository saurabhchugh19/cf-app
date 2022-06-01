import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// This is used to render any main route pages and provide with the overall layout flexibility like header/footer/sidebar
const withLayout = (Component, sidebar = true, header = false, footer = false) => {
  return props => {
    return (
      <>
        {sidebar && <Sidebar {...props} />}
        {header && <Header {...props} />}
        <Component {...props} />
        {footer && <Footer {...props} />}
      </>
    );
  };
};

export default withLayout;
