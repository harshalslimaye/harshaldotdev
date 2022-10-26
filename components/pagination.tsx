import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage }) => {
  const prev = currentPage === 2 ? `/` : `/page/${currentPage - 1}`;
  const next = `/page/${currentPage + 1}`

  return (
    <div className="flex">
      {currentPage > 1 && (
        <div className="flex-1 mb-7">
          <Link href={prev}>&larr; Previous</Link>
        </div>
      )}
      {currentPage < pageCount && (
        <div className="flex-1 text-right mb-7">
          <Link href={next}>Next &rarr;</Link>
        </div>
      )}
    </div>
  );
};

export default Pagination;
