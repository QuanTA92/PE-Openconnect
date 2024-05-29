import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CamHoa from './components/CamHoa';
import Hoihoa from './components/Hoihoa';
import ThuCong from './components/ThuCong';
import LamBanh from './components/LamBanh';
import Other from './components/Other';
import CreateEvent from './components/CreateEvent';
import TimeTicket from './components/TimeTicket';
import Bankinfo from './components/Bankinfo';
import Workshopdetail from './components/Workshopdetail';
import Bankticket from './components/Bankticket';
import Homepage from './components/Homepage';
import Navigation from "./Nav";

import Test from "./components/test";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (


    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/camhoa" element={<CamHoa />} />
          <Route path="/hoihoa" element={<Hoihoa />} />
          <Route path="/thucong" element={<ThuCong />} />
          <Route path="/lambanh" element={<LamBanh />} />
          <Route path="/Other" element={<Other />} />
          <Route path="/event" element={<CreateEvent />} />
          <Route path="/time" element={<TimeTicket />} />
          <Route path="/bankinfo" element={<Bankinfo />} />
          <Route path="/detail" element={<Workshopdetail />} />
          <Route path="/bankticket" element={<Bankticket />} />
          <Route path="/test" element={<Test />} />
          <Route path="/detail/:id" element={<Workshopdetail />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
