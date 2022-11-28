import React from "react";

export default class NewCountryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeValue: '',
            cityValue: ''
        }

        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handlePlaceChange(e) {
        this.setState({placeValue: e.target.value});
    }

    handleCityChange(e) {
        this.setState({cityValue: e.target.value})
    }

    handleClick(e) {
        this.props.addNewCountry(e, this.props.data,
            {place: this.state.placeValue, city: this.state.cityValue});
        this.setState({placeValue: '', cityValue: ''});
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Place" onChange={this.handlePlaceChange} value={this.state.placeValue} />
                <input type="text" placeholder="City" onChange={this.handleCityChange} value={this.state.cityValue} />
                <button onClick={this.handleClick}>Add Country</button>

            </div>
        )
    }
}