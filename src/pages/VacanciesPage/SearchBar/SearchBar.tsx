import { SearchInput } from 'ui';

export const SearchBar = () => {
  const handleClick = (value: string) => {
    console.log(`нахер это все${value}`);
  };

  return <SearchInput clickCallback={handleClick} />;
};
