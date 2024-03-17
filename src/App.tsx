import React from "react";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { News } from "./pages/News";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/event" element={<Event />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}