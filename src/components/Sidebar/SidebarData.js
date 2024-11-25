import React from 'react';
import { PiUserListLight } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
export const SidebarData = [
  {
    title: 'Quản lý checkin',
    path: '/',
    icon: <LuCalendarCheck2 />,
  },
  {
    title: 'Báo Cáo',
    path: '/baocao',
    icon: <IoDocumentTextOutline />,
  },
  {
    title: 'Danh sách nhân viên',
    path: '/danhsachnhanvien',
    icon: <PiUserListLight />,
  },
];