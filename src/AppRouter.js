import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuanLyCheckIn from './pages/QuanLyCheckIn/QuanLyCheckIn';
import BaoCao from './pages/BaoCao';
import DanhSachNhanVien from './pages/DanhSachNhanVien/DanhSachNhanVien';

const AppRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<QuanLyCheckIn />} />
    <Route path="/baocao" element={<BaoCao />} />
    <Route path="/danhsachnhanvien" element={<DanhSachNhanVien />} />
  </Routes>
);
};

export default AppRouter;
