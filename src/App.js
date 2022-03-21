/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './base/Nav';
import Home from './components/Home';
import Units from './components/Units';
// import UnitDetails from './components/UnitDetails';
import Details from './components/Details';

export default function App() {
  return (
    <>
      <Nav />
      <div className="container my-5">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="units" element={<Units />} />
            <Route path="details/:unitId" element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
