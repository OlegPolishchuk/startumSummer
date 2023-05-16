import { ROUTES } from 'constants';

import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

import cls from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (routesList: string[]) => {
    const pathNameList = location.pathname.split('/');

    const parentPath = `/${pathNameList[1]}`;

    return routesList.includes(parentPath) ? clsx(cls.link, cls.active) : cls.link;
  };

  return (
    <nav className={cls.nav}>
      <NavLink className={isActive([ROUTES.current, ROUTES.main])} to={ROUTES.main}>
        Поиск Вакансий
      </NavLink>
      <NavLink className={isActive([ROUTES.favorites])} to={ROUTES.favorites}>
        Избранное
      </NavLink>
    </nav>
  );
};
