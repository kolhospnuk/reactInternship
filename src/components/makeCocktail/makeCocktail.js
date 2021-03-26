import React, {Component} from "react";
import './makeCocktail.css';
import CocktailService from "./cocktailService";
import Form from "./addForm";

export default class MakeCocktail extends Component {

    state = {
        name: '',
        placeholder: false,
        cocktailList: [],
        currentCocktail: null
    }

    componentDidMount() {
        document.addEventListener('keypress', (e) => {

            if (e.code === 'KeyQ' && e.ctrlKey === true) {
                this.activatedCocktail(0);
            }
        })
    }

    showError() {
        this.setState({
            placeholder: true
        })
    }

    addCocktail = (name) => {
        let cocktailArr = [];

        if (name.length <= 3) {
            this.showError();
        } else {
            const service = new CocktailService();
            service.getCocktail(name)
                .then((cocktail) => {

                    for (let i = 0; i < cocktail.drinks.length; i++) {
                        const cocktailObj = {
                            id: i,
                            order: i,
                            name: cocktail.drinks[i].strDrink,
                            img: cocktail.drinks[i].strDrinkThumb,
                            active: false
                        }
                        cocktailArr.push(cocktailObj);
                    }

                    this.setState({
                        cocktailList: cocktailArr
                    })
                })
        }
    }

    showAlert = (cocktailList, item) => {

        if (cocktailList.length === item.id + 1) {
            alert('Images uploaded')
        }
    }

    showAlertErr = () => {
        alert('Error');
    }

    activatedCocktail = (id) => {

        this.setState(({cocktailList}) => {
            const before = cocktailList.slice(0, id);
            const after = cocktailList.slice(id + 1);
            const elem = cocktailList[id];
            elem.active = !elem.active;

            const newArr = [...before, elem, ...after];

            return {
                cocktailList: newArr
            }
        })
    }

    dragStartHandler(e, item) { // взяли

        this.setState({
            currentCard: item
        })
    }

    dragOverHandler(e) { //если над другим обьектом
        e.preventDefault();
    }

    dropHandler(e, item) { //отпустили

        const {cocktailList, currentCard} = this.state;
        e.preventDefault();

        let newArr = cocktailList.map(li => {
            if (li.id === item.id) {
                return {...li, order: currentCard.order}
            }
            if (li.id === currentCard.id) {
                return {...li, order: item.order}
            }

            return li
        })
        this.setState({
            cocktailList: newArr
        })
    }

    sortLi = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }

    render() {
        const {cocktailList} = this.state;

        const cocktails = cocktailList.sort(this.sortLi).map(item => {

            let activeCockClass = `cocktail-item`;

            if (item.active) {
                activeCockClass = `${activeCockClass} active`
            }

            return (
                <li className={activeCockClass}
                    onClick={() => {
                        this.activatedCocktail(item.id)
                    }}
                    draggable={true}
                    onDragStart={e => this.dragStartHandler(e, item)}
                    onDragOver={e => this.dragOverHandler(e)}
                    onDrop={e => this.dropHandler(e, item)}>
                    {item.name}
                    <div className="cocktail-img">
                        <img src={item.img}
                             onLoad={() => {
                                 this.showAlert(cocktailList, item)
                             }}
                             onError={this.showAlertErr}
                             alt={'img'}>
                        </img>
                    </div>
                </li>
            )
        })

        return (
            <div className="cocktail">
                <div className="cocktail-header">
                    Enter one ingredient of alcoholic cocktail(for example: martini)
                </div>
                <Form addCocktail={this.addCocktail}/>
                <ul>
                    <li>
                        <h3>Ctrl+q, if you want select first cocktail</h3>
                    </li>
                    {cocktails}
                </ul>
            </div>
        )
    }
}