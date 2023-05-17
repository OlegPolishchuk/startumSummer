import { CardsLoader } from 'components';
import { Card } from 'ui';

import cls from './CardList.module.css';

import { Vacancy } from 'api/types';

interface Props {
  cards: Vacancy[];
  isLoading?: boolean;
}
export const CardList = ({ cards, isLoading }: Props) => {
  return (
    <div className={cls.container}>
      {isLoading && <CardsLoader />}

      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
