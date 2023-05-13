import { PointerIcon } from 'ui';

import cls from '../Card.module.css';

interface Props {
  location: string;
}

export const Location = ({ location }: Props) => {
  return (
    <div className={cls.location}>
      <PointerIcon />
      <h4 className={cls.city}>{location}</h4>
    </div>
  );
};
