import React, {Component} from 'react';
import './scss/app.css';
import './scss/mediaApp.css';

import Header from "../Header/Header";
import About from "../About/About";
import Custom from "../Custom/Custom";
import Categories from "../Categories/Categories";
import Testimony from "../Testimony/Testimony";
import Footer from "../Footer/Footer";
import DataTable from "../DataTable/DataTable";
import MakeCocktail from "../MakeCocktail/MakeCocktail";

export default class App extends Component {

    state = {
        tittleData: [
            {id: 'about', flowerTittle: "Who we are", tittle: 'ABOUT US', classSmallFlower: 'small-flower-item', classBigFlower: 'big-flower'},
            {id: 'custom', flowerTittle: "How to Custom", tittle: 'HOW IT WORKS', classSmallFlower: 'small-flower-item'},
            {id: 'categories', flowerTittle: "What we have", tittle: 'CATEGORIES', classSmallFlower: 'small-flower-item'},
            {id: 'Testimony', flowerTittle: "What they say", tittle: 'TESTIMONY', classSmallFlower: 'small-flower-item'},
            {id: 'header', flowerTittle: "WOODIES", classSmallFlower: 'small-flower-item'},
            {id: 'footer', flowerTittle: "WOODIES", classSmallFlower: 'small-flower-item'}
        ]
    }

    render() {

        const {tittleData} = this.state;

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
                    <Header tittleData={tittleData}/>
                    <div className="container">
                        <About tittleData={tittleData}/>
                        <Custom tittleData={tittleData}/>
                        <Categories tittleData={tittleData}/>
                        <Testimony tittleData={tittleData}/>
                    </div>
                    <Footer tittleData={tittleData}/>
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
}
