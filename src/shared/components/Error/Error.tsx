import clsx from 'clsx';

import cls from './Error.module.css';

interface Props {
  errorMessage?: string;
  error?: any;
}
export const Error = ({ errorMessage, error }: Props) => {
  return (
    <main className={clsx(cls.container, 'container')}>
      <h1>Упс, что-то пошло не так!</h1>

      {errorMessage && <h3 className={cls.errorMessage}>errorMessage</h3>}
      {error && <pre className={cls.error}>{JSON.stringify(error)}</pre>}
    </main>
  );
};
