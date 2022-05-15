import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Client from '../pages/Client';
import '../styles/_global.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tavex" element={<Client />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
