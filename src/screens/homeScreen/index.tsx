/* -------------------------------- Libraries ------------------------------- */
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
/* ---------------------------------- Style --------------------------------- */
import styles from './styles';
import {ICONS} from '../../assets/icons';
/* -------------------------------- Component ------------------------------- */
import Btn from '../../components/btn';
import CalendarComponent from '../../components/calendarComponent';
import WeatherConditions from '../../components/weatherСonditions';
/* --------------------------------- Navigation --------------------------------- */
import {SCREENS} from '../../navigation/screens';
import {RootStackScreenType} from '../../navigation/navigationTypes';
/* ---------------------------------- Redux --------------------------------- */
import {fetchCurrentRequest} from '../../redux/actions/actions';
import {useTypedSelector} from '../../redux/hooks/useTypedSelector';
import {DateData} from 'react-native-calendars';
import {checkLocationPermission} from '../../utils/LocalPermissions';

const HomeScreen: RootStackScreenType<SCREENS.home> = ({navigation}) => {
  const dispatch = useDispatch();
  const {response, loading} = useTypedSelector(state => state.currentWeather);

  const INITIAL_DATE = new Date().toDateString();
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [location, setLocation] = useState('');
  console.log('loca', location);

  const navHandler = () => {
    navigation.navigate(SCREENS.forecastScreen, {geoLocation: location});
  };

  const geoCodePosition = async (location: {
    longitude: number;
    latitude: number;
  }) => {
    const test = await Geocoder.geocodePosition({
      lng: location?.longitude,
      lat: location?.latitude,
    });
    const currentLocation = test[0].locality.replace(/[^A-Za-z0-9]/, '');
    if (currentLocation) {
      setLocation(currentLocation);
      dispatch(
        fetchCurrentRequest({
          q: currentLocation,
          dt: moment(selected).format('yyyy-MM-DD'),
        }),
      );
    }
  };

  useEffect(() => {
    (async () => {
      if (await checkLocationPermission()) {
        Geolocation.getCurrentPosition(
          position => {
            geoCodePosition(position.coords);
          },
          error => {
            console.log(error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    })();
  }, []);

  const selectedDataHandler = useCallback(
    (selected?: DateData) => {
      setSelected(selected?.dateString || INITIAL_DATE);
      dispatch(
        fetchCurrentRequest({
          q: location,
          dt: moment(selected?.dateString).format('YYYY-MM-DD'),
        }),
      );
    },
    [location],
  );

  return (
    <SafeAreaView style={styles.homeScreens}>
      {(loading && !response) || !response ? (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.title}>{`${response?.location?.name}`}</Text>
          <View style={styles.container}>
            <Image
              style={{
                height: 80,
                width: 80,
              }}
              source={{
                uri: `https:${response?.forecast?.forecastday?.[0]?.day?.condition?.icon}`,
              }}
            />
            <Text
              style={
                styles.temp
              }>{`${response?.forecast?.forecastday?.[0]?.day?.avgtemp_c} \u2103`}</Text>
            <Text style={styles.subTitle}>
              {moment(response?.forecast?.forecastday?.[0]?.date).format(
                'dddd, MMM D',
              )}
            </Text>
            <View style={styles.lineBlock}>
              <View style={styles.lineHorizontal}></View>
              <View style={styles.lineVertical}></View>
              <WeatherConditions
                icon={ICONS.wind}
                conditions="wind"
                value={`${response?.forecast?.forecastday?.[0]?.day?.maxwind_kph} km/h`}
              />
              <WeatherConditions
                icon={ICONS.thermometer}
                conditions="feels like"
                value={`${response?.forecast?.forecastday?.[0]?.hour?.[0]?.feelslike_c} \u2103`}
              />
              <View style={styles.lineHorizontal}></View>
              <WeatherConditions
                icon={ICONS.humidity}
                conditions="Humidity"
                value={`${response?.forecast?.forecastday?.[0]?.day?.avghumidity}%`}
              />
              <WeatherConditions
                icon={ICONS.pressure}
                conditions="pressure"
                value={`${response?.forecast?.forecastday?.[0]?.hour?.[0]?.pressure_mb} mbar`}
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Btn title="Next 5 Days" onPress={navHandler} />
          </View>
          <CalendarComponent
            state={selected}
            setState={selectedDataHandler}
            data={INITIAL_DATE}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
