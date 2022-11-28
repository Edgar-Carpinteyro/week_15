import React from "react";
import "./App.css";
import Trip from "./Components/Trip.js";

const TRIPS_ENDPOINT = "https://635080e63e9fa1244e47b770.mockapi.io/explorers/";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewCountry = this.addNewCountry.bind(this);
    this.deleteCountry = this.deleteCountry.bind(this);
  }

  render() {
    const trips = this.state
      ? this.state.trips.map((trip, index) => (
          <Trip
            key={index}
            data={trip}
            addNewCountry={this.addNewCountry}
            deleteCountry={this.deleteCountry}
          />
        ))
      : null;
    return (
      <div>
        <h1>Trips to South America</h1>
        {trips}
      </div>
    );
  }

  componentDidMount() {
    fetch(TRIPS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          trips: data,
        });
      });
  }

  deleteCountry(e, trip, country) {
    const index = trip.countries.indexOf(country);
    trip.countries.splice(index, 1);
    updateTrip(trip).then(() => {
      this.setState((state) => {
        for (let b of state.trips) {
          if (b._id === trip._id) {
            let b = trip;
            break;
          }
        }
        return state;
      });
    });
    e.preventDefault();
  }
  addNewCountry(e, trip, country) {
    trip.countries.push(country);
    updateTrip(trip).then(() => {
      this.setState((state) => {
        for (let b of state.trips) {
          if (b._id === trip._id) {
            let b = trip;
            break;
          }
        }
        return state;
      });
    });
    e.preventDefault();
  }
}

function updateTrip(trip) {
  return fetch(`${TRIPS_ENDPOINT}/${trip._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trip),
  });
}
