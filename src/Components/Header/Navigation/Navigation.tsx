import { ROUTES } from 'constants';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import cls from './Navigation.module.css';

export const Navigation = () => {
  const isActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? clsx(cls.link, cls.active) : cls.link;

  return (
    <nav className={cls.nav}>
      <NavLink className={isActive} to={ROUTES.main}>
        Поиск Вакансий
      </NavLink>
      <NavLink className={isActive} to={ROUTES.favorites}>
        Избранное
      </NavLink>
    </nav>
  );
};
