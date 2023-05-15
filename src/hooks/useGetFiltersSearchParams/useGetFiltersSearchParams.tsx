import { VacanciesRequestFilterData } from 'api/types';
import { useFilterSearchParam, usePageSearchParam } from 'hooks';

export const useGetFiltersSearchParams = () => {
  const { page } = usePageSearchParam();
  const [keyword] = useFilterSearchParam('keyword');
  const [catalogues] = useFilterSearchParam('catalogues');
  const [payment_from] = useFilterSearchParam('payment_from');
  const [payment_to] = useFilterSearchParam('payment_to');

  const result = {} as VacanciesRequestFilterData;

  page && (result.page = page);
  keyword && (result.keyword = keyword);
  catalogues && (result.catalogues = Number(catalogues));
  payment_from && (result.payment_from = Number(payment_from));
  payment_to && (result.payment_to = Number(payment_to));

  return result;
};
