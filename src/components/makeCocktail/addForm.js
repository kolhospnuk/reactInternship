
import React, {Component} from "react";

export default class Form extends Component {

    state = {
        name: '',
        cocktailList: [],
        placeholder: false
    }

    cocktailChange = (e) => {
        this.setState({
            name: e.target.value,
            placeholder: false
        })
    };

    onSubmit = (e) => {
        const {name} = this.state;

        e.preventDefault();
        this.props.addCocktail(name);
    }

    render() {
        const {name} = this.state;
        let inputClass = `cocktail-form-input`;

        return(
            <form className="cocktail-form"
                  onSubmit={this.onSubmit}>
                <input className={inputClass}
                       type="text"
                       onChange={this.cocktailChange}
                       placeholder="Enter cocktail..."
                       value={name}/>
                <button className="cocktail-form-btn">
                    Enter
                </button>
            </form>
        )
    }
}
