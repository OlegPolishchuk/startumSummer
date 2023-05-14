import { useRef, useState } from 'react';

import Select from 'react-select';
import { Button, CustomSelect, Input } from 'ui';

import cls from '../Filters.module.css';

import { VacanciesRequestFilterData } from 'api/types';
import { useFetchVacancies } from 'hooks';
import { FiltersHeader } from 'pages/VacanciesPage/Filters/FiltersForm/FiltersHeader/FiltersHeader';

export interface Option {
  label: string;
  value: number;
}

interface Props {
  options: Option[];
}

export const FiltersForm = ({ options }: Props) => {
  const { fetchVacancies } = useFetchVacancies();

  const [selectOption, setSelectOption] = useState<Option>({} as Option);

  // @ts-ignore
  const selectRef = useRef<Select<Option>>(null);

  const paymentFromRef = useRef<HTMLInputElement>(null);
  const paymentToRef = useRef<HTMLInputElement>(null);

  const handleSetFilters = () => {
    const paymentFromValue = paymentFromRef.current?.value;
    const paymentToValue = paymentToRef.current?.value;

    if (paymentToValue && paymentFromValue) {
      if (Number(paymentToValue) < Number(paymentFromValue)) {
        paymentToRef.current.value = paymentFromValue;
      }
    }

    const filtersParams: VacanciesRequestFilterData = transformFiltersData({
      catalogues: selectOption.value && (selectOption.value as number),
      payment_from: Number(paymentFromValue) || 0,
      payment_to: Number(paymentToValue) || 0,
    });

    fetchVacancies(transformFiltersData(filtersParams));
  };

  const resetFilters = () => {
    console.log('click');

    selectRef.current.clearValue();

    setSelectOption({ label: '', value: 0 });
    paymentFromRef!.current!.value = '';
    paymentToRef!.current!.value = '';
  };

  return (
    <form className={cls.form}>
      <FiltersHeader onResetForm={resetFilters} />

      <CustomSelect
        ref={selectRef}
        setState={setSelectOption}
        label="Отрасль"
        options={options}
      />

      <div>
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
