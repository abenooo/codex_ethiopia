import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Technology from "./pages/Technology.tsx";
import NotFound from "./components/NotFound.tsx";
import Price from "./components/Pricing.tsx";
import Chatbot from "./components/Chatbot.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/technology" element ={< Technology/>}/>
          <Route path="/pricing" element ={< Price/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  </React.StrictMode>
);
