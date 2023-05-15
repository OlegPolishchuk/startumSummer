import { useRef } from 'react';

import Select from 'react-select';
import { Button, CustomSelect, Input } from 'ui';

import cls from '../Filters.module.css';

import { VacanciesRequestFilterData } from 'api/types';
import { FiltersHeader } from 'pages/VacanciesPage/Filters/FiltersForm/FiltersHeader/FiltersHeader';
import { Option } from 'pages/VacanciesPage/types';

interface Props {
  options: Option[];
  clickCallback: (formData: VacanciesRequestFilterData) => void;
}

export const FiltersForm = ({ options, clickCallback }: Props) => {
  // @ts-ignore
  const selectRef = useRef<Select<Option>>(null);
  const paymentFromRef = useRef<HTMLInputElement>(null);
  const paymentToRef = useRef<HTMLInputElement>(null);

  const handleSetFilters = () => {
    const paymentFromValue = paymentFromRef.current?.value;
    const paymentToValue = paymentToRef.current?.value;
    const catalogValue = selectRef.current.getValue()[0];

    if (paymentToValue && paymentFromValue) {
      if (Number(paymentToValue) < Number(paymentFromValue)) {
        paymentToRef.current.value = paymentFromValue;
      }
    }

    const filtersParams: VacanciesRequestFilterData = transformFiltersData({
      catalogues: catalogValue.value,
      payment_from: Number(paymentFromValue) || 0,
      payment_to: Number(paymentToValue) || 0,
    });

    clickCallback(transformFiltersData(filtersParams));
  };

  const resetFilters = () => {
    selectRef.current.clearValue();
    paymentFromRef!.current!.value = '';
    paymentToRef!.current!.value = '';
  };

  return (
    <form className={cls.form}>
      <FiltersHeader onResetForm={resetFilters} />

      <CustomSelect ref={selectRef} label="Отрасль" options={options} />

      <div className={cls.inputGroup}>
        <Input
          ref={paymentFromRef}
          label="Оклад"
          placeholder="От"
          type="number"
          min={0}
        />

        <Input
          ref={paymentToRef}
          placeholder="До"
          type="number"
          min={paymentFromRef?.current?.value}
        />
      </div>

      <Button type="button" full onClick={handleSetFilters}>
        Применить
      </Button>
    </form>
  );
};

function transformFiltersData(params: VacanciesRequestFilterData) {
  const filtersCopy = { ...params };

  let key: keyof typeof filtersCopy;

  for (key in filtersCopy) {
    if (!filtersCopy[key]) {
      delete filtersCopy[key];
    }
  }

  const { payment_from: from, payment_to: to } = filtersCopy;

  if (from && to) {
    filtersCopy.payment_to = to < from ? from : to;
  }

  return filtersCopy;
}
