import { useSearchParams } from 'react-router-dom';

export const useFilterSearchParam = (
  param: string,
): [string, (newParam: string) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentParam = searchParams.get(param);

  const setFilterSearchParam = (newParam: string) => {
    searchParams.set(param, newParam);

    setSearchParams(searchParams);
  };

  const resultParam = currentParam || '';

  return [resultParam, setFilterSearchParam];
};
