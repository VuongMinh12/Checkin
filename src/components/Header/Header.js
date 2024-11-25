// src/components/Header/Header.js
import React from "react";
import { IoMdMenu } from "react-icons/io";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";

const Header = ({ toggleSidebar }) => {
  const location = useLocation(); // Lấy thông tin về route hiện tại
  const currentPage = location.pathname; // Lấy pathname của route hiện tại

  // Hàm để lấy tên của trang từ SidebarData dựa vào pathname
  const getPageName = (path) => {
    const route = SidebarData.find((item) => item.path === path);
    return route ? route.title : "Page Not Found";
  };

  return (
    <div className="header">
      <IoMdMenu onClick={toggleSidebar}/>  &nbsp;/ &nbsp; <span>{getPageName(currentPage)}</span>
      
    </div>
  );
};

export default Header;
