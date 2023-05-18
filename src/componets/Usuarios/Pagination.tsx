// @flow
import { Usuario } from '../../interfaces/reqRes';
interface Paginas {
    tasksPerPage:number, 
    totalTasks:number,
    currentPage:number,
    usuarios:Array<Usuario>, 
    loadPage:void, 
}

const Pagination = (props:Paginas) => {
  const pageNumbers = props.usuarios||[];
/*
  for (let i = 1; i <= Math.ceil(props.totalTasks / props.tasksPerPage); i++) {
    pageNumbers.push(i);
  }
*/
  return (
   { /*
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            {pageNumber.length<2?
            <button
              className="page-link"
              onClick={() => props.loadPage(pageNumber)}
              disabled={pageNumber === props.currentPage}
            >
              {pageNumber}
            </button>:''}

          </li>
        ))}
      </ul>
    </nav>
            */}
  );
};


export default Pagination;
