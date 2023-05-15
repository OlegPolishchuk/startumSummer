import { HtmlParserOptions } from 'constants';

import { useEffect } from 'react';

import clsx from 'clsx';
import { CardsLoader } from 'components';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { Card } from 'ui';

import cls from './CurrentVacancy.module.css';

import { useFetchCurrentVacancy } from 'hooks';

export const CurrentVacancyPage = () => {
  const { vacancyData, fetchVacancy, loading } = useFetchCurrentVacancy();
  const { id } = useParams();

  const parsedHTML = parse(`${vacancyData.vacancyRichText}`, HtmlParserOptions);

  useEffect(() => {
    fetchVacancy(`${id}`);
  }, []);

  console.log(vacancyData);

  return (
    <main className={cls.container}>
      {loading && <CardsLoader />}

      <div className={clsx(cls.header)}>
        <Card card={vacancyData} large />
      </div>

      <div className={clsx(cls.body, 'wrapper')}>{parsedHTML}</div>
    </main>
  );
};
