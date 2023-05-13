import { Link } from 'react-router-dom';
import { SaveButton } from 'ui';

import cls from '../Card.module.css';

interface Props {
  profession: string;
  isFavorite: boolean;
}
export const Header = ({ profession, isFavorite }: Props) => {
  return (
    <div className={cls.header}>
      <h3 className={cls.title}>
        <Link to="/">{profession}</Link>
      </h3>
      <div className={cls.starButton}>
        <SaveButton isActive={isFavorite} />
      </div>
    </div>
  );
};
