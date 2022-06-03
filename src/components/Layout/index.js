import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

// This is used to render any main route pages and provide with the overall layout flexibility like header/footer/sidebar
const withLayout = (Component, sidebar = true, header = false, footer = false) => {
  return props => {
    return (
      <div className='layout-container'>
        {sidebar && (
          <div className='layout-sidebar'>
            <Sidebar {...props} />
          </div>
        )}
        <div>
          {header && <Header {...props} />}
          <Component {...props} />
          {footer && <Footer {...props} />}
        </div>
      </div>
    );
  };
};

export default withLayout;
