/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loader } from '@sharedComponents';
import routes from './RouteConfig';

const PageNotFound = lazy(() => import('@sharedComponents/UIElements/PageNotFound/PageNotFound'));

const AppRoutes = () => {
  return (
    <section className='routes-section'>
      <Suspense fallback={<Loader />}>
        <Switch>
          {(routes || []).map((route) => (
            <Route key={route.key} {...route} />
          ))}
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </section>
  );
};

export default AppRoutes;
