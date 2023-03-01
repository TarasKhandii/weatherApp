/* -------------------------------- Libraries ------------------------------- */
import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
/* ---------------------------------- Style --------------------------------- */
import styles from './styles';

interface WeatherConditionsProps {
  conditions: string;
  value: string;
  icon: string;
}

const WeatherConditions: React.FC<WeatherConditionsProps> = ({
  conditions,
  value,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={icon} />
      <View style={styles.block}>
        <Text style={styles.name}>{conditions}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default WeatherConditions;
