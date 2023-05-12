import { ROUTES } from 'constants';

import { NavLink } from 'react-router-dom';

import cls from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={cls.logo}>
      <h1 className={cls.title}>
        <NavLink to={ROUTES.main}>
          <img src="/images/logo.png" alt="logo" />
        </NavLink>
      </h1>
    </div>
  );
};
