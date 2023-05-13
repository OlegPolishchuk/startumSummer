import { Button, CloseIcon } from 'ui';

import cls from '../Filters.module.css';

export const FiltersHeader = () => {
  return (
    <header className={cls.header}>
      <h3 className={cls.title}>Фильтры</h3>

      <Button variant="text" className={cls.resetButton}>
        Сбросить все
        <CloseIcon className={cls.resetButtonIcon} />
      </Button>
    </header>
  );
};
