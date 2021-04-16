import React from "react";
import './scss/makeCocktail.css';

import {withCocktail} from '../../components/hoc-helpers/withCocktail'
import Form from "./components/AddForm";
import Spinner from "../../components/spinner/spinner";
import CocktailError from "../../components/ErrorsPlace/cocktailError";

const MakeCocktail = (props) => {

    const {cocktailList, spinnerLoading, loading, error, activatedCocktail,
        dragStartHandler, dragOverHandler, dropHandler, sortLi, addCocktail} = props;

    const cocktails = cocktailList.sort(sortLi).map(item => {

        let activeCockClass = `cocktail-item`;

        if (item.active) {
            activeCockClass = `${activeCockClass} active`
        }

        return (
            <li className={activeCockClass}
                onClick={() => activatedCocktail(item.order)}
                draggable={true}
                onDragStart={e => dragStartHandler(item)}
                onDragOver={e => dragOverHandler(e)}
                onDrop={e => dropHandler(e, item)}>
                {item.name}
                <div className="cocktail-img">
                    <img src={item.img}
                         alt={'img'}>
                    </img>
                </div>
            </li>
        )
    })

    const errorMessage = error ? <CocktailError/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <>{cocktails}</> : null

    return (
        <div className="cocktail">
            <div className="cocktail-header">
                Enter one ingredient of alcoholic cocktail(for example: martini)
            </div>
            <Form addCocktail={addCocktail}
                  spinnerLoading={spinnerLoading}/>
            <ul>
                <li>
                    <h3>Ctrl+q, if you want select first cocktail</h3>
                </li>
                {errorMessage}
                {spinner}
                {content}
            </ul>
        </div>
    )
}

export default withCocktail(MakeCocktail);