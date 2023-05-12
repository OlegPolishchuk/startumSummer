import { PointerIcon } from 'ui';

import cls from '../Card.module.css';

export const Location = () => {
  return (
    <div className={cls.location}>
      <PointerIcon />
      <h4 className={cls.city}>Новый уренгой</h4>
    </div>
  );
};
