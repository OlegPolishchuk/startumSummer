import { Button, CustomSelect, Input } from 'ui';

import cls from '../Filters.module.css';

interface Props {
  options: {
    label: string;
    value: string | number;
  }[];
}

export const FiltersForm = ({ options }: Props) => {
  return (
    <form className={cls.form}>
      <CustomSelect label="Отрасль" options={options} />

      <div>
        <Input label="Оклад" placeholder="От" type="number" />

        <Input placeholder="До" type="number" />
      </div>

      <Button full>Применить</Button>
    </form>
  );
};
