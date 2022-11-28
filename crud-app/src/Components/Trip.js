import React from "react";
import NewCountryForm from "./NewCountryForm";

export default class Trip extends React.Component {
  render() {
    const countries = this.props.data.countries
      ? this.props.data.countries.map((country, index) => (
          <li key={index}>
            Country: {country.place} City: {country.city}
            <button
              onClick={(e) =>
                this.props.deleteCountry(e, this.props.data, country)
              }
            >
              {" "}
              Delete
            </button>
          </li>
        ))
      : null;
    return (
      <div>
        <h1>{this.props.data.place}</h1>
        <ul>{countries}</ul>
        <NewCountryForm
          addNewCountry={this.props.addNewCountry}
          data={this.props.data}
        />
      </div>
    );
  }
}
