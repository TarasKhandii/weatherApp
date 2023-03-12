/* -------------------------------- Libraries ------------------------------- */
import {useEffect} from 'react';
import moment from 'moment';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useDispatch} from 'react-redux';
/* ---------------------------------- Style --------------------------------- */
import {ICONS} from '../../assets/icons';
import styles from './styles';
/* -------------------------------- Component ------------------------------- */
import DaysWeatherInfo from '../../components/daysWeatherInfo';
/* ---------------------------------- Redux --------------------------------- */
import {fetchForecastRequest} from '../../redux/actions/actions';
import {useTypedSelector} from '../../redux/hooks/useTypedSelector';
import {RootStackScreenType} from '../../navigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';

interface ItemData {
  date: string;
  day: {
    avghumidity: number;
    avgtemp_c: number;
  };
}

const ForecastScreen: RootStackScreenType<SCREENS.forecastScreen> = ({
  navigation,
  route,
}) => {
  const dispatch = useDispatch();
  const {res, loading} = useTypedSelector(state => state.forecastWeather);
  const navHandler = () => {
    navigation.goBack();
  };
  const {geoLocation} = route.params;

  useEffect(() => {
    dispatch(fetchForecastRequest({q: geoLocation, days: '5'}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={navHandler}>
            <SvgXml style={styles.svg} xml={ICONS.arrow} />
          </TouchableOpacity>
          <Text style={styles.title}>{`${res?.location?.name}`}</Text>
          <View style={styles.block}>
            {res?.forecast?.forecastday.map((item: ItemData, index: number) => {
              return (
                <DaysWeatherInfo
                  key={index}
                  icon={ICONS.humidity}
                  day={moment(item?.date).format('dddd, MMM D')}
                  humidity={`${item?.day.avghumidity}%`}
                  temperature={`${item.day.avgtemp_c}\u2103`}
                />
              );
            })}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ForecastScreen;
