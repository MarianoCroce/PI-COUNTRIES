import React from "react";

const Pagination = ({currentPage, totalPages, handlePageClick}) => {
    
    const pageLimit = 2;
    const pageNumbers = [];

    let startPage = Math.max(currentPage - pageLimit, 1);
    let endPage = Math.min(currentPage + pageLimit, totalPages);

    for (let i= startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }



}