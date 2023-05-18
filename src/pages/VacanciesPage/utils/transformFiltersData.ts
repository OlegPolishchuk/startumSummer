import { VacanciesRequestFilterData } from 'api/types';

export const transformFiltersData = (params: VacanciesRequestFilterData) => {
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
};
