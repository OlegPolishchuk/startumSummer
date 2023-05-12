import clsx from 'clsx';

import cls from './Card.module.css';
import { Description } from './Description/Description';
import { Header } from './Header/Header';
import { Location } from './Location/Location';

export const Card = () => {
  return (
    <div className={clsx(cls.card, 'wrapper')}>
      <Header />

      <Description />

      <Location />
    </div>
  );
};
