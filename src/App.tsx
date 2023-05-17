import { ContextWrapper, Error, GlobalLoader, Header } from 'components';
import { Outlet } from 'react-router-dom';

import { useInitializeApp } from 'hooks';

export const App = () => {
  const { loading, error } = useInitializeApp();

  return (
    <>
      <Header />

      {loading && <GlobalLoader />}
      {error ? (
        <Error error={error && error} />
      ) : (
        <ContextWrapper>
          <Outlet />
        </ContextWrapper>
      )}
    </>
  );
};
