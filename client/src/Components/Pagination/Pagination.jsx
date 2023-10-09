import React from "react";
import Styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, handlePageClick }) => {
  const pageLimit = 2;
  const pageNumbers = [];

  let startPage = Math.max(currentPage - pageLimit, 1);
  let endPage = Math.min(currentPage + pageLimit, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <div className={Styles.paginationContainer}>
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className={Styles.bn39}
      >
        <span className={Styles.bn39span}>Prev</span>
      </button>
      {startPage > 1 && (
        <button onClick={() => handlePageClick(1)} className={Styles.bn39}>
          <span className={Styles.bn39span}>1</span>
        </button>
      )}
      {startPage > 2 && <span>...</span>}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`${Styles.bn39} ${
            currentPage === number ? Styles.active : ""
          }`}
        >
          <span className={Styles.bn39span}>{number}</span>
        </button>
      ))}
      {endPage < totalPages - 1 && <span>...</span>}
      {endPage < totalPages && (
        <button
          onClick={() => handlePageClick(totalPages)}
          className={Styles.bn39}
        >
          <span className={Styles.bn39span}>{totalPages}</span>
        </button>
      )}
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={Styles.bn39}
      >
        <span className={Styles.bn39span}>Next</span>
      </button>
    </div>
  );
};

export default Pagination;
