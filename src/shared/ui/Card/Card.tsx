import clsx from 'clsx';

import cls from './Card.module.css';
import { Description } from './Description/Description';
import { Header } from './Header/Header';
import { Location } from './Location/Location';

import { Vacancy } from 'api/types';

interface Props {
  card: Vacancy;
}

export const Card = ({ card }: Props) => {
  const { currency, payment_to, payment_from, town, type_of_work, profession } = card;

  return (
    <div className={clsx(cls.card, 'wrapper')}>
      <Header profession={profession} isFavorite={false} />

      <Description
        currency={currency}
        payment_from={payment_from}
        payment_to={payment_to}
        type_of_work={type_of_work.title}
      />

      <Location location={town.title} />
    </div>
  );
};
