import React, { useState } from "react";
import "./QuanLyCheckIn.css";

import Pagination from "../../components/Pagination/Pagination";
import employeeData from "./Data";
import NotLoginData from "./DataNotLogin";
import NotLogin from "../../components/NotLogin/NotLogin";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

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

  const [notLoginNumber, setnotLoginNumber] = useState(1);
  const [notLoginSize] = useState(8);
  const totalNotLog = Math.ceil(NotLoginData.length / notLoginSize);
  const handleUserNotLog = (page) => {
    setnotLoginNumber(page);
  };
  const startUserNotLog = (notLoginNumber - 1) * notLoginSize;
  const itemnotlog = NotLoginData.slice(
    startUserNotLog,
    startUserNotLog + notLoginSize
  );

  return (
    <>
      <div className="checkin">
        <div className="monitor-header">
          <h5>Monitor</h5>
          <span className="header-span">Home {">"} Monitor</span>
        </div>

        <div className="search">
          <div className="flex-up">
            <label className="flex-span"> Ngày</label>
            <label className="flex-span"> Công ty</label>
            <label className="flex-span"> Phòng ban</label>
            <label className="flex-span"> Nhập tên nhân viên</label>
          </div>
          <div className="flex-up">
            <input aria-label="Date" type="date" className="flex" />

            <select defaultValue="" className="flex">
              <option disabled={true} value="">
                Công ty
              </option>
              <input className="form-control" />
              <option value="Chon">Chọn</option>
              <option value="ThangLong">Thăng Long</option>
            </select>

            <select defaultValue="" className="flex">
              <option disabled={true} value="">
                Phòng ban
              </option>
              <option value="Chon">Chọn</option>
              <option value="R&DCenter">R & D Center</option>
              <option value="TTCN">TTCN mới</option>
              <option value="HanhChinhNhanSu">Hành chính nhân sự</option>
              <option value="PhapCheDauThau">Pháp chế đấu thầu</option>
            </select>

            <input placeholder="Nhập tên nhân viên" className="flex" />
          </div>
        </div>

        <div className="middle">
          <div className="not-login">
            <div className="not-login-header">
              <h6>Nhân sự chưa điểm danh</h6>
              <NotLogin
                NotloginNumber={notLoginNumber}
                totalUserNotLog={totalNotLog}
                notLoginSize={notLoginSize}
                onNotLoginChange={handleUserNotLog}
              />
              <span
                className="header-span"
                style={{ color: "rgb(255, 89, 0)" }}
              >
                Xem tất cả
              </span>
            </div>

            <div className="not-login-main">
              {itemnotlog.map((login) => (
                <div className="flex-item" key={login.id}>
                  <div style={{ display: "flex" }}>
                    <img
                      src={login.avatar}
                      alt="avatar"
                      width="40"
                      height="40"
                      style={{ borderRadius: "0.8px", overflow: "hidden" }}
                    />
                    <div>
                      <b>{login.name} </b>
                      <div style={{ color: "rgb(255, 89, 0)" }}>
                        {login.company} - {login.department}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="login">
            <div>
              <HiOutlineUserGroup style={{ fontSize: "60px" }} />
            </div>
            <div>
              <span style={{ fontSize: "16px" }}>Nhân sự điểm danh</span>
              <p style={{ fontSize: "20px" }}> 40/64</p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            {/* Header */}
            <div className="row header">
              <div className="col-5 fw-bold fs-6">Họ tên nhân viên</div>
              <div className="col-2 fw-bold fs-6">Công ty</div>
              <div className="col-2 fw-bold fs-6">Phòng ban/Chức vụ</div>
              <div className="col-1 fw-bold fs-6">Giờ</div>
              <div className="col-2 fw-bold fs-6">Thiết bị liên kết</div>
            </div>

            {/* Body */}
            {currentItems.map((item) => (
              <div className="row hover-row" key={item.id}>
                <div className="col-5">
                  <img src={item.avatar} alt="avatar" width="32" height="32" />{" "}
                  &nbsp; {item.name}
                </div>
                <div className="col-2">{item.company}</div>
                <div className="col-2">{item.department}</div>
                <div className="col-1">{item.time}</div>
                <div className="col-2">{item.device}</div>
              </div>
            ))}

            {/* Footer (Pagination) */}
            <div className="row" style={{marginTop : "10px" , paddingBottom : "5px"}}>
              <div className="col-12" >
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
          <div>
            <div className="connect">
              <p className="header-connect">Tình trạng kết nối thiết bị</p>
              <div className="show-online">
                <div className="show-online-item">
                  <div className="show-online-item-text"> Thiết bị 1</div>
                  <div style={{ display: "flex" }}>
                    <span className="circle-online"></span>
                    <span> Online</span>
                  </div>
                </div>

                <div className="show-online-item">
                  <div className="show-online-item-text"> Thiết bị 2</div>
                  <div style={{ display: "flex" }}>
                    <div className="circle-offline"></div>
                    <div>Offline</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "260px",
                height: "385px",
                backgroundColor: "#fff",
                borderRadius: "6px",
                overflow: "hidden", // Giữ nội dung không vượt ra ngoài
                display: "flex",
                flexDirection: "column",
                marginLeft: "15px",
                position: "relative", // Để đảm bảo phần tử không tràn ra ngoài
              }}
            >
              <div className="stranger" style={{ padding: "10px" }}>
                <span>
                  <b >Người lạ</b>
                </span>
                <span className="red-stranger">Chưa xác nhận</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflowY: "auto", // Bật cuộn dọc khi cần thiết
                  flexGrow: 1, // Giúp nội dung bên trong tự động lớn hơn khi cần thiết
                }}
              >
                {/* Danh sách các item */}
                {itemnotlog.map((login) => (
                  <div
                    key={login.id}
                    className="stranger-item"
                    style={{ padding: "5px" }}
                  >
                    <img
                      src={login.avatar}
                      alt="avatar"
                      width="45"
                      height="45"
                      style={{ borderRadius: "50%" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div style={{fontSize : "13px"}}>Thời gian:</div>
                      <AiTwotoneExclamationCircle className="icon-stranger" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuanLyCheckIn;
