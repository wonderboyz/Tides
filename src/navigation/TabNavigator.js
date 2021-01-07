import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// navigation stacks
import HomeStack from './HomeStack';
import Calendar from './Calendar';
import StatsStack from './StatsStack';
import SettingsStack from './SettingsStack';

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    Calendar,
    StatsStack,
    SettingsStack
  },
  {
    initialRouteName: 'HomeStack',
    tabBarOptions: {
      activeTintColor: {
        light: colors.darkColor,
        dark: colors.grey
      },
      inactiveTintColor: {
        light: colors.grey,
        dark: colors.white20
      }
    }
  }
);

export default BottomTabNavigator;
