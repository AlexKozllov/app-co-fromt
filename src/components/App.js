import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import routers from '../routers/routers';

import './App.scss';
import Layout from './layout/Layout';
import Loader from './loader/Loader';

// import UserStatistics from "./pages/userSatistics/UserStatistics";

function App() {
  return (
    <div>
      <Layout>
        <div className="App">
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route
                path={routers.main}
                exact
                component={lazy(() => import('./pages/mainPage/MainPage'))}
              />
              <Route
                path={routers.userStatistics}
                exact
                component={lazy(() =>
                  import('./pages/userSatistics/UserStatistics')
                )}
              />
            </Switch>
          </Suspense>
        </div>
      </Layout>
    </div>
  );
}

export default App;
