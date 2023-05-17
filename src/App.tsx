import { Error, GlobalLoader, Header, ProfessionContext } from 'components';
import { Outlet } from 'react-router-dom';

import { useInitializeApp } from 'hooks';

export const App = () => {
  const { loading, error, professionList } = useInitializeApp();

  return (
    <>
      <Header />

      {loading && <GlobalLoader />}
      {error ? (
        <Error error={error && error} />
      ) : (
        <ProfessionContext professionList={professionList}>
          <Outlet />
        </ProfessionContext>
      )}
    </>
  );
};
