import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainView from "./views/MainView";
import AlbumView from "./views/AlbumView";
import NotFoundView from "./views/NotFoundView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Albums"element={<MainView />}></Route>
        <Route path="/Albums/:id" element={<AlbumView />}></Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
