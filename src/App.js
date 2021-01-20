import './App.css';
import React from 'react'
import routes from './routes'
import {positions, Provider} from 'react-alert'
import AlertTemplate from "react-alert-template-basic"
import Nav from './components/Nav/nav'


const options = {
  timeout: 2000,
  position: positions.TOP_RIGHT
}

function App() {
 
  return (
    <div className="App">
      <Nav />
        <Provider template={AlertTemplate}{...options}>
          {routes}
        </Provider>
    </div>
  );
}

export default App;
