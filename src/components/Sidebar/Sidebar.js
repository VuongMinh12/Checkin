// src/components/Sidebar/Sidebar.js
import React from 'react';
import { SidebarData } from './SidebarData';
import { NavLink } from 'react-router-dom';
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
             <NavLink 
              to={item.path} 
              className={({ isActive }) => (isActive ? 'active-link' : 'sidebar-link')}
            >
              <span>{item.title}</span> 
              <span className="icon">{item.icon}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
