
import React, {Component} from "react";

export default class Form extends Component {

    state = {
        name: '',
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
        const {addCocktail, spinnerLoading} = this.props;

        e.preventDefault();
        addCocktail(name);
        spinnerLoading(true);
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
