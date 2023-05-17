import { useEffect, useRef } from 'react';

import { CardsLoader } from 'components';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { CardList, Pagination } from 'ui';

import cls from './FavoritesPage.module.css';

import { usePageSearchParam } from 'hooks';
import { useFetchFavorites } from 'pages/FavoritesPage/hooks/useFetchFavorites';

export const FavoritesPage = () => {
  const { favoriteVacancies, pageCount, loading } = useFetchFavorites();
  const { page, setPageSearchParams } = usePageSearchParam();

  const progressRef = useRef<LoadingBarRef>(null);

  const handlePageClick = (nextPage: number) => {
    setPageSearchParams(nextPage);
  };

  useEffect(() => {
    loading && progressRef.current?.continuousStart();
    !loading && progressRef?.current?.complete();
  }, [loading]);

  return (
    <div className={cls.container}>
      <LoadingBar color="#5E96FC" ref={progressRef} />

      {loading ? (
        <CardsLoader />
      ) : (
        <>
          <CardList cards={favoriteVacancies} />

          <Pagination
            pageCount={pageCount}
            currentPage={page - 1}
            onPageClick={handlePageClick}
          />
        </>
      )}
    </div>
  );
};
