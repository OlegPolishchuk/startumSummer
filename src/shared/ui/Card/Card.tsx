import clsx from 'clsx';

import cls from './Card.module.css';
import { Description } from './Description/Description';
import { Header } from './Header/Header';
import { useToggleFavorite } from './hooks/useToggleFavorite';
import { Location } from './Location/Location';

import { Vacancy } from 'api/types';

interface Props {
  card: Vacancy;
  large?: boolean;
}

export const Card = ({ card, large = false }: Props) => {
  const { currency, payment_to, payment_from, town, type_of_work, profession, id } = card;

  const { isFavorite, toggleIsFavorite } = useToggleFavorite(card);

  return (
    <div className={clsx(cls.card, 'wrapper', large && cls.large)}>
      <Header
        id={id}
        profession={profession}
        isFavorite={isFavorite}
        toggleIsFavoriteCallback={toggleIsFavorite}
        large={large}
      />

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
