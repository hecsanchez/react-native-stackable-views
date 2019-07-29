import { createStackNavigator } from 'react-navigation';
import { Home } from 'app/containers';

export const routes = createStackNavigator({
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  });
  