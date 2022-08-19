import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Message from "./Message/Message";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import User from "./User/User";

import classes from './style.module.css';

const Content = () => {
  return (
    <BrowserRouter>
      <div className={classes.profile}>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Content;