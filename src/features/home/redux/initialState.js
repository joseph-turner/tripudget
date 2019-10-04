const initialState = {
  name: 'Europia',
  adults: 2,
  children: 0,
  travelers: {
    adults: ['Joseph', 'Devin'],
    children: ['Sage']
  },
  destinations: ['Paris', 'Berlin', 'Bern'],
  duration: 0,
  startDate: '2019-05-06',
  endDate: '2019-05-22',
  budget: {
    airfare: 500,
    lodging: 50,
    food: 50,
    activities: 50,
    car: 35,
    mpg: 30,
    fuelPrice: 5,
    miles: 2500,
    extraMiles: 25,
    totalAirfare: 0,
    totalLodging: 0,
    totalFood: 0,
    totalActivities: 0,
    totalCarRental: 0,
    totalMiles: 0,
    totalFuelCost: 0,
    total: 0
  }
};

export default initialState;
