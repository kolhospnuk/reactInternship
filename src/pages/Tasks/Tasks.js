import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/Tasks.module.css';

import BtnTheme from './components/BtnTheme';
import DataTable from './DataTable/DataTable';
import MakeCocktail from './MakeCocktail/MakeCocktail';
import BtnLng from './components/BtnLng';

const Tasks = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <header>
        <BtnTheme />
        <BtnLng />
        <h1>{t('woodies')}</h1>
      </header>
      <section
        className={styles.contentDescribe}
      >
        <h2>{t('myProject')}</h2>
      </section>
      <DataTable />
      <MakeCocktail />
    </div>
  );
};

export default Tasks;
