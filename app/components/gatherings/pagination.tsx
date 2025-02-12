import clsx from 'clsx';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex space-x-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        &lt;
      </button>

      {pages.map(page => (
        <button
          type="button"
          key={page}
          onClick={() => currentPage !== page && onPageChange(page)}
          className={clsx(
            'px-3 py-1 rounded',
            page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}
