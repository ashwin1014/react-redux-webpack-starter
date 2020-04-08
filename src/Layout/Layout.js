import React from 'react';
import '../styles/main.scss';

const Layout = ({ children }) => {
  return <main className='app-layout'>{children}</main>;
};

export default Layout;
