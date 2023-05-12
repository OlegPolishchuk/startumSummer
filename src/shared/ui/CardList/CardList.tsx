import { Card } from 'ui';

import cls from './CardList.module.css';

interface Props {
  cards: any[];
}
export const CardList = ({ cards }: Props) => {
  console.log(cards);

  return (
    <div className={cls.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
