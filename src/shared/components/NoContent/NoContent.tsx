import { ReactNode } from 'react';

import cls from './NoContent.module.css';

interface Props {
  children?: ReactNode;
}
export const NoContent = ({ children }: Props) => {
  return (
    <div className={cls.container}>
      <img
        className={cls.picture}
        src="/images/nocontent_bg.png"
        alt="there is no content on this page"
      />
      <h2 className={cls.title}>Упс, здесь еще ничего нет!</h2>
      {children}
    </div>
  );
};
