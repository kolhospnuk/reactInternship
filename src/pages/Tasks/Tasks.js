import React, { Component } from 'react';
import './tasks.css';

import ThemeBtn from '../../App/components/ThemeBtn';
import DataTable from '../DataTable/DataTable';
import MakeCocktail from '../MakeCocktail/MakeCocktail';

export default class Tasks extends Component {
  render() {
    return (
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
  }
}
