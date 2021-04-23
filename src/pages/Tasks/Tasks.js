import React from 'react';
import './scss/tasks.css';

import ThemeBtn from './components/ThemeBtn';
import DataTable from '../DataTable/DataTable';
import MakeCocktail from '../MakeCocktail/MakeCocktail';

const Tasks = () => (
  <div className="content">
    <header>
      <ThemeBtn />
      <h1>
        Woodies
      </h1>
    </header>
    <section
      id="describe"
    >
      <h2>My project is a family business to make wooden furniture</h2>
    </section>
    <DataTable />
    <MakeCocktail />
  </div>
);

export default Tasks;
