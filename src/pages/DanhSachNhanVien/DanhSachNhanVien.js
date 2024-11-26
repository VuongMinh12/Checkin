import React, { useState } from "react";
import "./DanhSachNhanVien.css";
import Pagination from "../../components/Pagination/Pagination";
import employeeData from "../QuanLyCheckIn/Data";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { BiLinkAlt } from "react-icons/bi";

function DanhSachNhanVien() {
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
      <div className="list-member">
        <h2>Danh sách nhân viên</h2>

        <div className="frame">
          <div className="search-list">
            <div className="row">
              <div className="col-3 font-bold">Nhập tên nhân viên</div>
              <div className="col-3 font-bold" >Công ty</div>
              <div className="col-3" >
                <span className="font-bold">Phòng ban</span><br />
                <i style={{fontSize : "14px"}}> (Vui lòng chọn công ty) </i>
              </div>
              <div className="col-3 " style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn-add" > + Thêm mới </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <input className="search-member" placeholder="Nhập tên nhân viên" />
              </div>
              <div className="col-3">
                <select defaultValue="" className="search-member">
                  <option disabled={true} value="">
                    Công ty
                  </option>
                  <input className="form-control" />
                  <option value="Chon">Chọn</option>
                  <option value="ThangLong">Thăng Long</option>
                </select>
              </div>
              <div className="col-3">
                <select defaultValue="" className="search-member">
                  <option disabled={true} value="">
                    Phòng ban
                  </option>
                  <option value="Chon">Chọn</option>
                  <option value="R&DCenter">R & D Center</option>
                  <option value="TTCN">TTCN mới</option>
                  <option value="HanhChinhNhanSu">Hành chính nhân sự</option>
                  <option value="PhapCheDauThau">Pháp chế đấu thầu</option>
                </select>
              </div>
            </div>
          </div>

          <div className="table-member">
            {/* Header */}
            <div className="row table-member" style={{backgroundColor : "rgb(194, 194, 194)"}}>
              <div className="col-1 fw-bold custom-col"> STT</div>
              <div className="col-5 fw-bold ">Họ tên nhân viên</div>
              <div className="col-2 fw-bold ">Công ty</div>
              <div className="col-2 fw-bold " style={{width : "21.66666667%"}}>Phòng ban/Chức vụ</div>
              <div className="col-2 fw-bold " >Hành động</div>
            </div>

            {/* Body */}
            {currentItems.map((item) => (
              <div className="row table-member" key={item.id}>
                <div className="col-1 custom-col">{item.no} </div>
                <div className="col-5">
                  <img src={item.avatar} alt="avatar" width="38" height="38" />{" "}
                  &nbsp; {item.name}
                </div>
                <div className="col-2">{item.company}</div>
                <div className="col-2" style={{width : "21.66666667%"}}>{item.department}</div>
                <div className="col-2" >
                  <button className="btn-link"> <BiLinkAlt /></button>
                  <button className="btn-edit"><FaPen /></button>
                  <button className="btn-delete"><FaTrash /></button>
                </div>
              </div>
            ))}

            {/* Footer (Pagination) */}
            <div
              className="row"
              style={{ marginTop: "20px" }}
            >
              <div className="col-12">
                <Pagination
                  pageNumber={pageNumber}
                  totalPages={totalPages}
                  pageSize={pageSize}
                  totalItems={employeeData.length}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DanhSachNhanVien;
