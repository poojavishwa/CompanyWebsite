// Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div className="flex justify-center mt-4">
      <ul className="flex">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              className={`px-3 py-1 mx-1${
                currentPage === index + 1
                  ? " border-b-2 border-orange-400"
                  : "border-b-2"
              }`}
              onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
