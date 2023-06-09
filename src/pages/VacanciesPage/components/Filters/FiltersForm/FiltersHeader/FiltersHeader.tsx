import { Button, CloseIcon } from 'ui';

import cls from '../../Filters.module.css';

interface Props {
  onResetForm: () => void;
}

export const FiltersHeader = ({ onResetForm }: Props) => {
  return (
    <div className={cls.header}>
      <h3 className={cls.title}>Фильтры</h3>

      <Button
        variant="text"
        type="button"
        onClick={onResetForm}
        className={cls.resetButton}
      >
        Сбросить все
        <CloseIcon className={cls.resetButtonIcon} />
      </Button>
    </div>
  );
};
