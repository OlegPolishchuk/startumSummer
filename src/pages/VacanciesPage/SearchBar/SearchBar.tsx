import { ROUTES } from 'constants';

import { useNavigate } from 'react-router-dom';
import { SearchInput } from 'ui';

import { VacanciesRequestFilterData } from 'api/types';
import { useFilterSearchParam } from 'hooks';

interface Props {
  disabled?: boolean;
  fetchVacancies: (filterParams: VacanciesRequestFilterData) => Promise<void>;
}

export const SearchBar = ({ disabled, fetchVacancies }: Props) => {
  const navigate = useNavigate();
  const [keyword] = useFilterSearchParam('keyword');

  const handleClick = async (value: string) => {
    if (value !== keyword) {
      navigate(`${ROUTES.main}?keyword=${value}`);

      await fetchVacancies({ keyword: value });
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
