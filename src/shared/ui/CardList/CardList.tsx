import { Card } from 'ui';

import cls from './CardList.module.css';

import { Vacancy } from 'api/types';

interface Props {
  cards: Vacancy[];
}
export const CardList = ({ cards }: Props) => {
  return (
    <div className={cls.container}>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
