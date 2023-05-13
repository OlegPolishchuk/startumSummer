import { Button, Input } from 'ui';

import cls from '../Filters.module.css';

export const FiltersForm = () => {
  return (
    <form className={cls.form}>
      <Input label="Отрасль" placeholder="Выберете отрасль" />

      <div>
        <Input label="Оклад" placeholder="От" type="number" />

        <Input placeholder="До" type="number" />
      </div>

      <Button full>Применить</Button>
    </form>
  );
};
