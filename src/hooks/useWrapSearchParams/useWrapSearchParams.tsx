import { useSearchParams } from 'react-router-dom';

import { VacanciesRequestFilterData } from 'api/types';

export const useWrapSearchParams = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  let queryString = '?';
  const wrapSearchParams = (params: VacanciesRequestFilterData) => {
    const existingFilters: Partial<
      Record<keyof VacanciesRequestFilterData, string | number>
    > = {};

    const filtersKeys = Object.keys(params);

    filtersKeys.forEach(key => {
      const property = key as keyof typeof params;

      if (params[property]) {
        searchParam.set(key, `${params[property]}`);

        queryString += `${key}=${params[property]}&`;

        if (!(property in existingFilters)) {
          existingFilters[property] = params[property];
        }
      }
    });

    setSearchParam(searchParam);

    queryString = queryString.slice(0, -1);

    return { filters: existingFilters as VacanciesRequestFilterData, queryString };
  };

  return wrapSearchParams;
};
