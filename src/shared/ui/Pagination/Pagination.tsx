import ReactPaginate from 'react-paginate';

import cls from './Pagination.module.css';

export const Pagination = () => {
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
      pageCount={10}
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
    />
  );
};
