import { ROUTES } from 'constants';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { SaveButton } from 'ui';

import cls from '../Card.module.css';

interface Props {
  profession: string;
  isFavorite: boolean;
  toggleIsFavoriteCallback: () => void;
  id: number;
  large?: boolean;
}
export const Header = ({
  id,
  profession,
  isFavorite,
  toggleIsFavoriteCallback,
  large = false,
}: Props) => {
  return (
    <div className={cls.header}>
      <h3 className={clsx(cls.title, large && cls.title_large)}>
        {large ? (
          `${profession}`
        ) : (
          <NavLink to={`${ROUTES.current}/${id}`}>{profession}</NavLink>
        )}
      </h3>
      <div className={cls.starButton}>
        <SaveButton isActive={isFavorite} onClick={toggleIsFavoriteCallback} />
      </div>
    </div>
  );
};
