import React from "react";
import { Route, Routes } from "react-router-dom";
import Message from "./Message/Message";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import User from "./User/User";

import classes from './style.module.css';

const Content = () => {
  return (
    <div className={classes.profile}>
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/message" element={<Message />} />
      </Routes>
    </div>
  )
}

export default Content;