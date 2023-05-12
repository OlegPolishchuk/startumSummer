import cls from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={cls['lds-ring']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
