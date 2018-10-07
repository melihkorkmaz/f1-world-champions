import React from 'react';
import Home from './pages/Home';
import { Header } from './components';

const App = () => (
    <div>
        <Header>
            <span>F1 World Champions</span>
        </Header>
        <div className="container">
            <Home />
        </div>
    </div>
  );

export default App;
