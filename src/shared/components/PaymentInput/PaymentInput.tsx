import React, { ChangeEvent, forwardRef, useRef } from 'react';

import { Input } from 'ui';

import { VacanciesRequestFilterData } from 'api/types';

interface Props {
  placeholder: string;
  dataAttr: string;
  label?: string;
  setFilters: React.Dispatch<React.SetStateAction<VacanciesRequestFilterData>>;
  stateProperty: keyof VacanciesRequestFilterData;
  defaultValue: number;
}

const ThrottleDelay = 400;

export const PaymentInput = forwardRef<HTMLInputElement, Props>(
  ({ dataAttr, placeholder, label, defaultValue, setFilters, stateProperty }, ref) => {
    const progress = useRef(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (progress.current) {
        return;
      }

      progress.current = true;

      if (setFilters) {
        setTimeout(() => {
          setFilters(state => ({
            ...state,
            [stateProperty]: event.target.value,
          }));

          progress.current = false;
        }, ThrottleDelay);
      }
    };

    return (
      <Input
        ref={ref}
        defaultValue={defaultValue === 0 ? '' : defaultValue}
        type="number"
        data-elem={dataAttr}
        placeholder={placeholder}
        label={label}
        onChange={handleInputChange}
        min={0}
        step={5000}
      />
    );
  },
);
