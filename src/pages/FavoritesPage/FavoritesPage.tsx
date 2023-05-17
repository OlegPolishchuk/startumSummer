import { ROUTES } from 'constants';

import { CardsLoader, NoContent } from 'components';
import { NavLink } from 'react-router-dom';
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

  const content = favoriteVacancies.length ? (
    <>
      <CardList cards={favoriteVacancies} />

      <Pagination
        pageCount={pageCount}
        currentPage={page - 1}
        onPageClick={handlePageClick}
      />
    </>
  ) : (
    <NoContent>
      <NavLink className={cls.noContentLink} to={ROUTES.main}>
        Поиск вакансий
      </NavLink>
    </NoContent>
  );

  return (
    <div className={cls.container}>
      <LinearLoadingBar loading={isVacancyInAction} />

      {loading && <CardsLoader />}
      {!loading && content}
    </div>
  );
};
