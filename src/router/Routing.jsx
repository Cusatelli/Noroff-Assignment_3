import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Translate from '../components/Translate';

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Translate" element={<Translate />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}
