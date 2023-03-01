/* ------------------------------ Basic import ------------------------------ */
import React from 'react';
import {Text, View} from 'react-native';
/* -------------------------------- Libraries ------------------------------- */
import {SvgXml} from 'react-native-svg';
/* ---------------------------------- Style --------------------------------- */

import styles from './styles';
interface DaysWeatherProps {
  day: string;
  temperature: string;
  icon: string;
  humidity: string;
}

const DaysWeatherInfo: React.FC<DaysWeatherProps> = ({
  icon,
  day,
  temperature,
  humidity,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.humidity}>
        <SvgXml xml={icon} />
        <Text style={styles.humidityText}>{humidity}</Text>
      </View>
      <Text style={styles.text}>{day}</Text>
      <Text style={styles.temperature}>{temperature}</Text>
    </View>
  );
};

export default DaysWeatherInfo;
