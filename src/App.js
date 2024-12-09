import React from 'react';
import './App.css';
import Home from './pages/Home'
import Categories from './pages/Categories';
import Wallet from './pages/Wallet';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favorite from './pages/Favorite';
import FisrtPage from './components/FirstPage';
import Login from './pages/Login';
import Registration from './components/Registration';
import Verify from './components/Verify';
import RegForm from './components/RegForm';
import ForgotPassword from './components/ForgotPassword';
import EnterCode from './components/EnterCode';
import ResetPassword from './components/ResetPassword';
import DansInfo from './pages/DansInfo';
import Animewatch from './components/Animewatch/Animewatch';
import Animewatch2 from './components/Animewatch/Animewatch2';
import Animewatch3 from './components/Animewatch/Animewatch3';
import Animewatchabout from './components/Animewatch/Animewatchabout';
import Animewatchabout2 from './components/Animewatch/Animewatchabout2';
import Animewatchabout3 from './components/Animewatch/Animewatchabout3';
import { AnimeProvider }  from './pages/AnimeContext';
function App() {
  return (
    <BrowserRouter>
    <AnimeProvider>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/categories" element={<Categories/>}></Route>
      <Route path="/wallet" element={<Wallet/>}></Route>
      <Route path="/favorite" element={<Favorite/>}></Route>
      <Route path="/" element={<FisrtPage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Registration" element={<Registration/>}></Route>
      <Route path="/Verify" element={<Verify/>}></Route>
      <Route path="/RegForm" element={<RegForm/>}></Route>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/EnterCode" element={<EnterCode/>}></Route>
      <Route path="/ResetPassword" element={<ResetPassword/>}></Route>
      <Route path="/DansInfo" element={<DansInfo/>}></Route>
      <Route path="/Animewatch" element={<Animewatch/>}></Route>
      <Route path="/Animewatch2" element={<Animewatch2/>}></Route>
      <Route path="/Animewatch3" element={<Animewatch3/>}></Route>
      <Route path="/Animewatch/Animewatchabout" element={<Animewatchabout/>}></Route>
      <Route path="/Animewatch2/Animewatchabout2" element={<Animewatchabout2/>}></Route>
      <Route path="/Animewatch3/Animewatchabout3" element={<Animewatchabout3/>}></Route>
    </Routes>
    </AnimeProvider>
    </BrowserRouter>
  );
}

export default App;
