import clsx from 'clsx';

import cls from '../Card.module.css';

interface Props {
  currency: string;
  payment_to?: number;
  payment_from?: number;
  type_of_work: string;
  large?: boolean;
}

export const Description = ({
  currency,
  large = false,
  payment_from = 0,
  payment_to = 0,
  type_of_work,
}: Props) => {
  const payment = createSalaryString(payment_from, payment_to, currency);

  return (
    <div className={clsx(cls.description, large && cls.description_large)}>
      {!!payment && <p className={cls.salary}>з/п {payment}</p>}
      <p className={cls.dot} />
      <p className={cls.workTime}>{type_of_work}</p>
    </div>
  );
};

function createSalaryString(payment_from: number, payment_to: number, currency: string) {
  let result = '';

  if (payment_from !== 0 && payment_to !== 0) {
    result = `${payment_from} - ${payment_to} `;
  }

  if (payment_from !== 0) {
    result = `${payment_from}`;
  }

  if (payment_to !== 0) {
    result = `${payment_to}`;
  }

  return result === '' ? '' : `${result} ${currency}`;
}
