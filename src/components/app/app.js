import React from 'react';
import './app.css';
import './mediaApp.css';

import Header from "../header/header";
import About from "../about/about";
import Custom from "../custom/custom";
import Categories from "../categories/categories";
import Testimony from "../testimony/testimony";
import Footer from "../footer/footer";
import DataTable from "../dataTable/dataTable";
import MakeCocktail from "../makeCocktail/makeCocktail";

const App = () => {

    return (
        <div className="container-global">
            <header>
                <h1>Woodies</h1>
            </header>
            <section id="describe">
                <h2>My project is a family business to make wooden furniture</h2>
            </section>
            <DataTable/>
            <MakeCocktail/>
            <div className="work-area">
                <Header/>
                <div className="container">
                    <About/>
                    <Custom/>
                    <Categories/>
                    <Testimony/>
                </div>
                <Footer/>
            </div>
            <footer>
                <ul className="data">
                    <li className="data-item">Anton Momot</li>
                    <li className="data-item">
                        <a href={"https://github.com/kolhospnuk"} target="_blank">GitHub</a>
                    </li>
                    <li className="data-item">
                        <a href={"https://dribbble.com/shots/11018704-Woodies-Furniture-Online-Shop-Landing-Page"}
                           target="_blank">
                            Template
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default App;
