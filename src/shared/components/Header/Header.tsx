import clsx from 'clsx';

import cls from './Header.module.css';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={clsx('container', cls.header_container)}>
        <Navigation />
      </div>
    </header>
  );
};
