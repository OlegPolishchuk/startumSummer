import clsx from 'clsx';
import Select from 'react-select';

import cls from './Select.module.css';

interface Option {
  label: string;
  value: string | number;
}
interface Props {
  label?: string;
  options: Option[];
}

export const CustomSelect = ({ options, label }: Props) => {
  return (
    <div className={clsx(cls.wrapper, label && cls.label)}>
      <p className={cls.label}>{label}</p>
      <Select
        placeholder="Выберете отрасль"
        options={options}
        className={cls.select}
        classNames={{
          control: state => clsx(cls.select_control, state.isFocused && cls.arrowFocused),
          indicatorSeparator: () => cls.separator,
          placeholder: () => cls.placeholder,
          option: state => clsx(cls.option, state.isFocused && cls.option_active),
        }}
      />
    </div>
  );
};
