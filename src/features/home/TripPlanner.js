import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import deep from 'deep-get-set';
// import { Link } from 'react-router-dom';

import * as actions from './redux/actions';
import { getTrip } from './redux/selectors';

import { Counter, Input, InputList } from '../common';

export class TripPlanner extends Component {
  static propTypes = {
    trip: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.actions.calcDuration();
  }

  render() {
    const { actions, trip } = this.props;

    return (
      <div className="trip container">
        <div className="trip__name">
          <Input
            className="trip__name__input"
            name="name"
            value={trip.name}
            style={{ fontSize: 36 }}
            onChange={actions.updateField} />
        </div>
        {/* Dates */}
        <div className="trip__dates">
          <Input
            label="From"
            className="trip__dates--start grid__col"
            name="startDate"
            type="date"
            value={trip.startDate}
            onChange={actions.updateField} />
          <Input
            label="To"
            className="trip__dates--end grid__col"
            name="endDate"
            type="date"
            value={trip.endDate}
            onChange={actions.updateField} />
            <p className="trip__duration">{trip.duration || null} days</p>
        </div>
        {/* Travelers */}
        <div className="trip__travelers grid__row">
          <h3 className="grid__row__label">Travelers {trip.totalTravelers}</h3>
          <Counter label="Adults" name="adults" value={trip.adults} {...actions} />
          <Counter label="Children" name="children" value={trip.children} {...actions} />
          {/* <InputList
            label="Adults"
            className="trip__travelers--adults grid__col"
            list={deep(trip, 'travelers.adults') || ['Bjork']}
            name="travelers.adults"
            {...actions} />
          <InputList
            label="Children"
            className="trip__travelers--children grid__col"
            list={deep(trip, 'travelers.children') || ['Benny']}
            name="travelers.children"
            {...actions} /> */}
        </div>
        <div className="trip__airfare">
          <Input
            label="Airfare"
            name="budget.airfare"
            value={trip.budget.airfare}
            type="number"
            onChange={actions.updateField} />
            <p className="trip__airfare__total">{trip.budget.totalAirfare}</p>
        </div>
        {/* Destinations (List) */}
        <div className="trip__destinations">
          <InputList
            label="Destinations"
            list={deep(trip, 'destinations') || ['Tokyo', 'Hong Kong', 'Bangkok']}
            name="destinations"
            {...actions} />
            <p className="trip__destinations__total">{trip.destinations.length}</p>
        </div>
        {/* Budget: lodging, food, car, fuel & driving */}
        <div className="trip__budget">
          <Input
            label="Daily Lodging"
            name="budget.lodging"
            type="number"
            value={trip.budget.lodging}
            onChange={actions.updateField} />
            <p className="trip__budget__lodging">{trip.budget.totalLodging}</p>
          <Input
            label="Daily Food"
            name="budget.food"
            type="number"
            value={trip.budget.food}
            onChange={actions.updateField} />
            <p className="trip__budget__food">{trip.budget.totalFood}</p>
          <Input
            label="Daily Activities"
            name="budget.activities"
            type="number"
            value={trip.budget.activities}
            onChange={actions.updateField} />
            <p className="trip__budget__activities">{trip.budget.totalActivities}</p>
          <Input
            label="Daily Car Rental"
            name="budget.car"
            type="number"
            value={trip.budget.car}
            onChange={actions.updateField} />
            <p className="trip__budget__car">{trip.budget.totalCarRental}</p>
          <Input
            label="Estimated Car MPG"
            name="budget.mpg"
            type="number"
            value={trip.budget.mpg}
            onChange={actions.updateField} />
          <Input
            label="Estimated Fuel Cost ($/gal)"
            name="budget.fuelPrice"
            type="number"
            value={trip.budget.fuelPrice}
            onChange={actions.updateField} />
          <Input
            label="Estimated Miles"
            name="budget.miles"
            type="number"
            value={trip.budget.miles}
            onChange={actions.updateField} />
          <Input
            label="Extra Miles"
            name="budget.extraMiles"
            type="number"
            value={trip.budget.extraMiles}
            onChange={actions.updateField} />
            <p className="trip__budget__fuel">{trip.budget.totalFuelCost}</p>
        </div>
        <h2 className="trip__budget__total">{trip.budget.total}</h2>
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  trip: getTrip(state),
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TripPlanner);
