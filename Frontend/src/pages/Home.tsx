import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import RealEstateWebsite from "pages/RealEstateWebsite";
import Login from '../components/Login';
import Register from  '../components/Register';
import Contact from "../components/Contact";
import Service from "../components/Service";

const Home = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<RealEstateWebsite />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
};
export default Home;
