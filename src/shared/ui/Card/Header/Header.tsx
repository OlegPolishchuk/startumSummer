import { Link } from 'react-router-dom';
import { Star } from 'ui';

import cls from '../Card.module.css';

export const Header = () => {
  return (
    <div className={cls.header}>
      <h3 className={cls.title}>
        <Link to="/">Менеджер-дизайнер</Link>
      </h3>
      <Star isActive={false} />
    </div>
  );
};
