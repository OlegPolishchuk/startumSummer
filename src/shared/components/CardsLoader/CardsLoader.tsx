import cls from './CardsLoader.module.css';

export const CardsLoader = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls['lds-ellipsis']}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
