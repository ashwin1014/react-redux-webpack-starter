import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Layout from './Layout/Layout';
import Home from './pages/Home/Home.Container';

const App = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>My React Starter</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name='description' content='React Redux Starter Pack' />
      </Helmet>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
