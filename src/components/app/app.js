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

const App = () => {

    const headerName = 'Woodies',
        headerDesctibe = 'My project is a family business to make wooden furniture',
        name = 'Anton Momot',
        gitHub = 'GitHub',
        template = 'Template',
        gitHubLink = "https://github.com/kolhospnuk",
        templateLink = "https://dribbble.com/shots/11018704-Woodies-Furniture-Online-Shop-Landing-Page";

    return (
        <div className="container-global">
            <header>
                <h1>{headerName}</h1>
            </header>
            <section id="describe">
                <h2>{headerDesctibe}</h2>
            </section>
            <DataTable/>
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
                    <li className="data-item">{name}</li>
                    <li className="data-item">
                        <a href={gitHubLink} target="_blank">{gitHub}</a>
                    </li>
                    <li className="data-item">
                        <a href={templateLink} target="_blank">{template}</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default App;
