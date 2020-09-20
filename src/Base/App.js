import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Layout from '../layout/Layout';
import AppRoutes from './Routes';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <meta charSet='utf-8' />
          <link rel='canonical' href='http://mysite.com/example' />
          <meta name='description' content='React Redux Starter Pack' />
        </Helmet>
        <AppRoutes />
      </Layout>
    </HelmetProvider>
  );
};

export default App;
