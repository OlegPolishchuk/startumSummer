import React, { forwardRef, useEffect, useState } from 'react';

import clsx from 'clsx';
import Select from 'react-select';

import cls from './Select.module.css';

import { VacanciesRequestFilterData } from 'api/types';
import { Option } from 'pages/VacanciesPage/types';

interface Props {
  label?: string;
  options: Option[];
  defaultValueKey?: number;
  setFilters: React.Dispatch<React.SetStateAction<VacanciesRequestFilterData>>;
}

// @ts-ignore
export const CustomSelect = forwardRef<Select<Option>, Props>(
  ({ options, label, defaultValueKey, setFilters }, ref) => {
    const [value, setValue] = useState<Option | undefined>(undefined);

    const handleChange = (option: Option | null) => {
      setValue(option || ({} as Option));
      setFilters(state => ({ ...state, catalogues: option?.value }));
    };

    useEffect(() => {
      setValue(options.find(option => option.value === defaultValueKey));
    }, [options.length]);

    useEffect(() => {
      if (!value?.value) {
        setValue(undefined);
      }
    }, [value]);

    return (
      <div className={clsx(cls.wrapper, label && cls.label)}>
        <p className={cls.label}>{label}</p>

        <div data-elem="industry-select">
          <Select
            data-elem="industry-select"
            ref={ref}
            value={value}
            onChange={handleChange}
            placeholder="Выберете отрасль"
            options={options}
            className={cls.select}
            classNames={{
              control: state =>
                clsx(cls.select_control, state.isFocused && cls.arrowFocused),
              indicatorSeparator: () => cls.separator,
              placeholder: () => cls.placeholder,
              option: state => clsx(cls.option, state.isFocused && cls.option_active),
            }}
          />
        </div>
      </div>
    );
  },
);
