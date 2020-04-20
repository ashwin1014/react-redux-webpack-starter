import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home/Home.Container'));
const PageNotFound = lazy(() => import('./SharedComponents/UIElements/PageNotFound/PageNotFound'));

const AppRoutes = () => {
  return (
    <section className='routes-section'>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </section>
  );
};

export default AppRoutes;
