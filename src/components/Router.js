import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link, 
    Switch
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
        <nav>
          <Link to="/welcome">WELCOME</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/welcome">
              <WelcomeComponent />
            </Route>
            <Route path="/about">
              <AboutComponent />
            </Route>
            <Route path="/">
              <DefaultComponent />
            </Route>
          </Switch>
        </main>
      </Router>
    )
}

