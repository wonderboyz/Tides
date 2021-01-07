import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'react-navigation';
import { colors } from '../../constants';


const SvgCalendar = ({ active, size }) => {
  const theme = useTheme();
  const fill = active
    ? colors.activeTintColor[theme]
    : colors.inactiveTintColor[theme];

  return (
    <Svg height={size} width={size} viewBox="0 0 32 32">
      <Path
        d="M 0 0 L 52 0 L 52 50 L 0 50 M 2 48 L 50 48 L 50 6 L 2 6 M 5 9 L 11 9 L 11 14 L 5 14 M 14 9 L 20 9 L 20 14 L 14 14 M 23 9 L 29 9 L 29 14 L 23 14 M 32 9 L 38 9 L 38 14 L 32 14 M 41 9 L 47 9 L 47 14 L 41 14 M 5 17 L 11 17 l 0 5 l -6 0 m 0 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m -36 3 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m -36 3 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m -36 3 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0 m 9 -5 l 6 0 l 0 5 l -6 0" 
        fill={fill}
      />
    </Svg>
  );
};

SvgCalendar.defaultProps = {
  active: false,
  size: 20
};

SvgCalendar.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgCalendar;
