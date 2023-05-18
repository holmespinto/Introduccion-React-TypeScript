// @flow
import React from 'react';
import { Usuario } from '../../interfaces/reqRes';
interface Paginas{
    tasksPerPage:number, 
    totalTasks:number,
    currentPage:number,
    usuarios:Array<Usuario>, 
}

const Pagination = (props:Paginas) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalTasks / props.tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            {pageNumber<11?
            <button
              className="page-link"
              //onClick={() => props.onPageChange(pageNumber)}
              disabled={pageNumber === props.currentPage}
            >
              {pageNumber}
            </button>:''}

          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Pagination;
