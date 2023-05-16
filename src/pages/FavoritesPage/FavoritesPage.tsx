import { useContext } from 'react';

import { CardList } from 'ui';

import cls from './FavoritesPage.module.css';

import { AppContext } from 'context';

export const FavoritesPage = () => {
  const { favoriteVacancies } = useContext(AppContext);

  return (
    <div className={cls.container}>
      <CardList cards={favoriteVacancies} />
    </div>
  );
};
