// src/components/Sidebar/Sidebar.js
import React from 'react';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Đảm bảo file CSS có đầy đủ style
import Logo from '../../assets/1637381601.png'

const Sidebar = ({ isSidebarOpen }) => {

  return (
    <div className={isSidebarOpen ? 'sidebar' : 'sidebar-closed'}>
      <div className="logo">
        <img src={Logo} alt="Thang Long Inc" />
      </div>
      <ul className="sidebar-menu">
        {SidebarData.map((item, index) => (
          <li key={index} >
            <Link to={item.path}>
              <span><b>{item.title}</b></span> 
              <span className="icon">{item.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
