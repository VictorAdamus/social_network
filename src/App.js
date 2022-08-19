import React from 'react';
import './App.css';
import Content from './components/Content/Profile';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
function App() {
  return (
    <div className='app'>
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
