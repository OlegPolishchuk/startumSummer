import cls from '../Card.module.css';

export const Description = () => {
  return (
    <p className={cls.description}>
      <span className={cls.salary}>з/п от 70000 rub</span> <span className={cls.dot} />
      <span className={cls.workTime}>Полынй рабочий день</span>
    </p>
  );
};
