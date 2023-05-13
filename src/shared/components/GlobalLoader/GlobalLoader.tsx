import { Loader } from 'ui';

import cls from './GlobalLoafer.module.css';

export const GlobalLoader = () => {
  return (
    <div className={cls.wrapper}>
      <Loader />
    </div>
  );
};
