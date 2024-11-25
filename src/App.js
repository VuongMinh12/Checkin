// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header';
import './App.css'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  return (
    <Router>
      <div className="app-container">
        <div className={isSidebarOpen ? 'sidebar' : 'sidebar-closed'} >
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>
        
        <div className={isSidebarOpen ? 'content-bar' : 'content'}>
          <Header toggleSidebar = {toggleSidebar}/>
            <div className="router">
              <AppRouter />
            </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
