import React from "react";
import "./Pagination.css";
import * as BsIcons from "react-icons/bs";

const Pagination = ({
  pageNumber,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handlePreviousPage = () => {
    if (pageNumber > 1) onPageChange(pageNumber - 1);
  };
  const handleNextPage = () => {
    if (pageNumber < totalPages) onPageChange(pageNumber + 1);
  };

  const handlePageSizeChange = (event) => {
    onPageSizeChange(Number(event.target.value));
  };

  return (
    <div className="pagination-container">
      {/* Controls */}
      <div className="pagination-controls">
        <button
          onClick={handleFirstPage}
          disabled={pageNumber === 1}
          className="pagination-button"
        >
          <BsIcons.BsChevronDoubleLeft />
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={pageNumber === 1}
          className="pagination-button"
        >
          <BsIcons.BsChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`pagination-page ${
                page === pageNumber ? "active" : ""
              }`}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={handleNextPage}
          disabled={pageNumber === totalPages}
          className="pagination-button"
        >
          <BsIcons.BsChevronRight />
        </button>
        <button
          onClick={handleLastPage}
          disabled={pageNumber === totalPages}
          className="pagination-button"
        >
          <BsIcons.BsChevronDoubleRight />
        </button>
      </div>

      {/* Info */}
      <div className="pagination-info">
        <span>
          Xem hàng:{" "}
          <select value={pageSize} onChange={handlePageSizeChange}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </span>
        <span className="pagination-metadata">
          Mục:{" "}
          {`${(pageNumber - 1) * pageSize + 1} - ${Math.min(
            pageNumber * pageSize,
            totalItems
          )} của ${totalItems}`}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
