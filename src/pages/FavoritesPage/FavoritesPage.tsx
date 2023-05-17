import { CardsLoader } from 'components';
import { CardList, LinearLoadingBar, Pagination } from 'ui';

import cls from './FavoritesPage.module.css';

import { usePageSearchParam } from 'hooks';
import { useFetchFavorites } from 'pages/FavoritesPage/hooks/useFetchFavorites';

export const FavoritesPage = () => {
  const { favoriteVacancies, pageCount, loading, isVacancyInAction } =
    useFetchFavorites();
  const { page, setPageSearchParams } = usePageSearchParam();

  const handlePageClick = (nextPage: number) => {
    setPageSearchParams(nextPage);
  };

  return (
    <div className={cls.container}>
      <LinearLoadingBar loading={isVacancyInAction} />

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
