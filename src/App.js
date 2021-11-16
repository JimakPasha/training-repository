import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Date from './pages/Date/Date';
import Math from './pages/Math/Math';
import Year from './pages/Year/Year';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';

import './styles/global.scss';
import './styles/cssTransition.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <div className="container">
            <PagesAll />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const PagesAll = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames="cssTransition"
        key={location.key}
      >
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/date">
            <Date />
          </Route>
          <Route exact path="/math">
            <Math />
          </Route>
          <Route exact path="/year">
            <Year />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Redirect to="/error">
            <ErrorPage />
          </Redirect>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
