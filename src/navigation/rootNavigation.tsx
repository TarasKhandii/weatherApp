/* ------------------------------- Navigation ------------------------------- */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* --------------------------------- Screens -------------------------------- */
import ForecastScreen from '../screens/forecastScreen';
import HomeScreen from '../screens/homeScreen';
import {RootStackParamList} from './navigationTypes';
/* --------------------------------- SCREENS --------------------------------- */
import {SCREENS} from './screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.home}>
      <Stack.Screen name={SCREENS.home} component={HomeScreen} />
      <Stack.Screen name={SCREENS.forecastScreen} component={ForecastScreen} />
    </Stack.Navigator>
  );
};
export default RootNavigation;
