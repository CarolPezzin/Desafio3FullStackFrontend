import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const RoutesMain = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
        
  );
};

export default RoutesMain;