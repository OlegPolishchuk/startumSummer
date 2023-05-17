import { SearchParams } from 'constants';

interface Props {
  total: number;
  elementsOnPage: number;
}
export const getPageCount = ({ elementsOnPage, total }: Props) => {
  const { maxEntities } = SearchParams;
  const finalTotalCount = total > maxEntities ? maxEntities : total;

  return Math.ceil(finalTotalCount / elementsOnPage);
};
