import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import 'bootstrap/dist/js/bootstrap.bundle';
import Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProSidebarProvider>
          <Routes/>
        </ProSidebarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
