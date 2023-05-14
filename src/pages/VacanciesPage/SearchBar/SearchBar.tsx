import { SearchInput } from 'ui';

import { VacanciesRequestFilterData } from 'api/types';
import { useFilterSearchParam } from 'hooks';

interface Props {
  disabled?: boolean;
  fetchVacancies: (filterParams: VacanciesRequestFilterData) => Promise<void>;
}

export const SearchBar = ({ disabled, fetchVacancies }: Props) => {
  const [keyword, setKeywordParam] = useFilterSearchParam('keyword');

  const handleClick = async (value: string) => {
    if (value !== keyword) {
      await fetchVacancies({ keyword: value, page: 1 });
      setKeywordParam(value);
    }
  };

  return (
    <SearchInput
      disabled={disabled}
      defaultValue={keyword && keyword}
      clickCallback={handleClick}
    />
  );
};
