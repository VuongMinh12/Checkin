import React, { useState } from "react";
import "./QuanLyCheckIn.css";
import Table from "react-bootstrap/Table";
import Pagination from "../../components/Pagination/Pagination";
import employeeData from "./Data";

function QuanLyCheckIn() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = Math.ceil(employeeData.length / pageSize);

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  const handlePageSizeChange = (items) => {
    setPageSize(items);
    setPageNumber(1);
  };

  const startIndex = (pageNumber - 1) * pageSize;
  const currentItems = employeeData.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className="checkin">
        <div className="monitor-header">
          <h2>Monitor</h2>
          <span className="header-span">Home {">"} Monitor</span>
        </div>

        <div className="search">
          <div className="flex-up"> 
          <label className="flex-span"> Ngày</label>
          <label className="flex-span"> Công ty</label>
          <label className="flex-span"> Phòng ban</label>
          <label className="flex-span"> Nhập tên nhân viên</label>
          </div>
          <div className="flex-up" >
          <input aria-label="Date" type="date" className="flex"/>

          <select defaultValue="" className="flex">
            <option disabled={true}  value="">Công ty</option>
            <option value="Chon">Chọn</option>
            <option value="ThangLong">Thăng Long</option>
          </select>

          <select defaultValue="" className="flex">
            <option disabled={true} value="">Phòng ban</option>
            <option value="Chon">Chọn</option>
            <option value="R&DCenter">R & D Center</option>
            <option value="TTCN">TTCN mới</option>
            <option value="HanhChinhNhanSu">Hành chính nhân sự</option>
            <option value="PhapCheDauThau">Pháp chế đấu thầu</option>
          </select>

          <input placeholder="Nhập tên nhân viên" className="flex"/>
          </div>
        </div>

        <div className="not-log">

        </div>

        <Table hover>
          <thead>
            <tr>
              <th colSpan={6}>Họ tên nhân viên</th>
              <th colSpan={2}>Công ty</th>
              <th colSpan={1}>Phòng ban/Chức vụ</th>
              <th colSpan={2}>Giờ</th>
              <th colSpan={1}>Thiết bị liên kết</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td colSpan={6}>
                  {/* <img src={item.logo} width="50" height="50" /> */}
                  {item.name}
                </td>
                <td colSpan={2}>{item.company}</td>
                <td colSpan={1}>{item.department}</td>
                <td colSpan={2}>{item.time}</td>
                <td colSpan={1}>{item.device}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={12}>
                <Pagination
                  pageNumber={pageNumber}
                  totalPages={totalPages}
                  pageSize={pageSize}
                  totalItems={employeeData.length}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                />
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </>
  );
}

export default QuanLyCheckIn;
