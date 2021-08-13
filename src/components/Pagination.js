import React from 'react';

export default function Pagination({postsPerPage,totalPosts,paginate}) {

    // loop for craete page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav >
            <ul className="pagination">
                { pageNumbers.map(number => (
                    <li key={number} className="page-item active" aria-current="page">

                         <a onClick={() => paginate(number)}
                          className="page-link"
                          href='!#'
                          style={{cursor:'pointer'}}
                          >
                          {number}
                          </a>

                    </li>
                ))}
            </ul>
        </nav>
    )
}
