import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import MultiBaseScreen from '../screens/MultiBaseScreen';
import MultiLevel2Screen from '../screens/MultiLevel2Screen';

// icons
import SvgCalendar from '../components/icons/Svg.Pages';

const MultiTabBarIcon = ({ focused }) => <SvgCalendar active={focused} />;
MultiTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Multi Stack
// /////////////////////////////////////////////////////////////////////////////
const Calendar = createStackNavigator(
  {
    MultiBase: MultiBaseScreen,
    MultiLevel2: MultiLevel2Screen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Calendar',
      tabBarIcon: MultiTabBarIcon
    }
  }
);

export default Calendar;
