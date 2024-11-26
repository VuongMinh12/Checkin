import React from "react";
import "./NotLogin.css";
import * as BsIcons from "react-icons/bs";

const NotLogin = ({
  NotloginNumber,
  totalUserNotLog,
  onNotLoginChange,
}) => {
  const handlePreviousPage = () => {
    if (NotloginNumber > 1) onNotLoginChange(NotloginNumber - 1);
  };
  const handleNextPage = () => {
    if (NotloginNumber < totalUserNotLog) onNotLoginChange(NotloginNumber + 1);
  };

  return (
    <div className="notLogin-container">
      <div className="notLogin-controls">
        
        <button
          onClick={handlePreviousPage}
          disabled={NotloginNumber === 1}
          className="notLogin-button"
        >
          <BsIcons.BsChevronLeft style={{ strokeWidth: 2, fill: 'rgb(248, 112, 62)' }} />
        </button>
        <button
          onClick={handleNextPage}
          disabled={NotloginNumber === totalUserNotLog}
          className="notLogin-button"
        >
          <BsIcons.BsChevronRight style={{ strokeWidth: 2, fill: 'rgb(248, 112, 62)' }}/>
        </button>
      </div>
    </div>
  );
};

export default NotLogin;
