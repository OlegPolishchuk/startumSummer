import clsx from 'clsx';

import cls from './Card.module.css';
import { Description } from './Description/Description';
import { Header } from './Header/Header';
import { Location } from './Location/Location';

import { Vacancy } from 'api/types';

interface Props {
  card: Vacancy;
  large?: boolean;
}

export const Card = ({ card, large = false }: Props) => {
  const { currency, payment_to, payment_from, town, type_of_work, profession, id } = card;

  console.log(large);

  return (
    <div className={clsx(cls.card, 'wrapper', large && cls.large)}>
      <Header id={id} profession={profession} isFavorite={false} large={large} />

      <Description
        currency={currency}
        payment_from={payment_from}
        payment_to={payment_to}
        type_of_work={type_of_work && type_of_work.title}
        large={large}
      />

      <Location location={town && town.title} />
    </div>
  );
};
