import React, { useRef } from 'react';

import { PaymentInput } from 'components';
import Select from 'react-select';
import { Button, CustomSelect } from 'ui';

import cls from '../Filters.module.css';

import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import { VacanciesRequestFilterData } from 'api/types';
import { useGetFiltersSearchParams } from 'hooks';
import { Option } from 'pages/VacanciesPage/types';
import { transformFiltersData } from 'pages/VacanciesPage/utils';

interface Props {
  options: Option[];
  clickCallback: (formData: VacanciesRequestFilterData) => void;
  setFilters: React.Dispatch<React.SetStateAction<VacanciesRequestFilterData>>;
}

export const FiltersForm = ({ options, clickCallback, setFilters }: Props) => {
  const { payment_from, payment_to, catalogues } = useGetFiltersSearchParams();

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
      catalogues: catalogValue?.value || null,
      payment_from: Number(paymentFromValue) || 0,
      payment_to: Number(paymentToValue) || 0,
    });

    clickCallback(transformFiltersData(filtersParams));
  };

  const resetFilters = () => {
    setFilters(state => ({
      ...state,
      catalogues: undefined,
      payment_to: 0,
      payment_from: 0,
    }));

    paymentFromRef!.current!.value = '';
    paymentToRef!.current!.value = '';
    selectRef.current.clearValue();
  };

  return (
    <form className={cls.form}>
      <FiltersHeader onResetForm={resetFilters} />

      <CustomSelect
        ref={selectRef}
        label="Отрасль"
        options={options}
        defaultValueKey={catalogues}
        setFilters={setFilters}
      />

      <div className={cls.inputGroup}>
        <PaymentInput
          ref={paymentFromRef}
          defaultValue={payment_from || 0}
          placeholder="От"
          dataAttr="salary-from-input"
          setFilters={setFilters}
          stateProperty="payment_from"
        />

        <PaymentInput
          ref={paymentToRef}
          defaultValue={payment_to || 0}
          placeholder="До"
          dataAttr="salary-to-input"
          setFilters={setFilters}
          stateProperty="payment_to"
        />
      </div>

      <Button type="button" full onClick={handleSetFilters} data-elem="search-button">
        Применить
      </Button>
    </form>
  );
};
