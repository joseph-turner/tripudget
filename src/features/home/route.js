import {
  TripPlanner,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: '',
      name: 'TripPlanner',
      component: TripPlanner,
      isIndex: true,
    },
  ],
};
