import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import MoviePage from "./Pages/Movies";
import Imdb from "./Pages/Imdb";
import Player from "./Pages/Player";
import Signup from "./Pages/Signup";
import TVShows from "./Pages/TVShows";
import UserListedMovies from "./Pages/UserListedMovies";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./Utils/firebase-config";

export default function App() {
 


  return (
    <BrowserRouter>
      <Routes>
      
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Imdb />} />
      </Routes>
    </BrowserRouter>
  );
}