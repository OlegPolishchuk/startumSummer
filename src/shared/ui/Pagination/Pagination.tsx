import ReactPaginate from 'react-paginate';

import cls from './Pagination.module.css';

interface Props {
  pageCount: number;
  currentPage: number;
  onPageClick: (nextPage: number) => void;
}
export const Pagination = ({ pageCount, currentPage, onPageClick }: Props) => {
  const handleClick = (event: {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;
  }) => {
    onPageClick(event.selected + 1);
  };

  return (
    <ReactPaginate
      className={cls.container}
      containerClassName={cls.container}
      pageLinkClassName={cls.pageItem}
      breakLabel=""
      activeLinkClassName={cls.active}
      previousLinkClassName={cls.pageItem}
      nextLinkClassName={cls.pageItem}
      disabledLinkClassName={cls.disabled}
      previousLabel={<span>&#8249;</span>}
      nextLabel={<span>&#8250;</span>}
      renderOnZeroPageCount={null}
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
      prevPageRel={currentPage === 0 ? null : 'prev'}
      forcePage={currentPage}
      pageCount={pageCount}
      onPageChange={handleClick}
    />
  );
};
