import { useEffect, useRef } from 'react';

import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

interface Props {
  loading?: boolean;
}

export const LinearLoadingBar = ({ loading }: Props) => {
  const progressRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    loading && progressRef.current?.continuousStart();
    !loading && progressRef?.current?.complete();
  }, [loading]);

  return <LoadingBar color="#5E96FC" ref={progressRef} />;
};
