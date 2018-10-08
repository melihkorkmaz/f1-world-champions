import React from 'react';
import Home from './pages/Home';
import { Header } from './components';

/**
 * I don't use routing, because I don't need it for this task. 
 * But in the future we can remove <Home/> compenent and add routes here.
 */
const App = () => (
    <React.Fragment>
        <Header>
            <span>F1 World Champions</span>
        </Header>
        <div className="container">
            <Home />
        </div>
    </React.Fragment>
  );

export default App;
