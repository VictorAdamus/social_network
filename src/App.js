import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <SideBar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
