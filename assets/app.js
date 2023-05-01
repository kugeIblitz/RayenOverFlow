import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
//Components
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

;


class App extends React.Component {
  render() {
    return (
        <>
      <NavBar />
     
      </>
    )
  }
}
createRoot(document.getElementById('root')).render(<App />);

