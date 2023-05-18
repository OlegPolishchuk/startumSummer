import React from 'react';

import { SearchInput } from 'ui';

import { VacanciesRequestFilterData } from 'api/types';
import { useFilterSearchParam } from 'hooks';

interface Props {
  disabled?: boolean;
  fetchVacancies: (filterParams: VacanciesRequestFilterData) => void;
  setFilters: React.Dispatch<React.SetStateAction<VacanciesRequestFilterData>>;
}

export const SearchBar = ({ disabled, fetchVacancies, setFilters }: Props) => {
  const [keyword, setKeyword] = useFilterSearchParam('keyword');

  const handleClick = async (value: string) => {
    if (value !== keyword) {
      fetchVacancies({ keyword: value });
      setKeyword(value);
    }
  };

  return (
    <SearchInput
      key={keyword}
      disabled={disabled}
      value={keyword && keyword}
      clickCallback={handleClick}
      setFilters={setFilters}
    />
  );
};
