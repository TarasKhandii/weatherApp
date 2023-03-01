import {
  Alert,
  Linking,
  ToastAndroid,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const hasLocationPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };
  const status = await Geolocation.requestAuthorization('whenInUse');
  if (status === 'granted') {
    return true;
  }
  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }
  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow "WeatherApp" to determine your location.`,
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }
  return false;
};

const hasLocationPermissionAndroid = async () => {
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }
  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Location permission revoked by user.',
      ToastAndroid.LONG,
    );
  }
  return false;
};

export const checkLocationPermission = async () => {
  let granted;
  if (Platform.OS === 'ios') granted = await hasLocationPermissionIOS();
  else {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === RESULTS.DENIED) {
      Alert.alert(
        'Enable location',
        'GeoPod collects location data to enable navigation and create your walking routes even when the app is closed or not in use.',
        [
          {
            text: 'Yes',
            onPress: async () => {
              granted = await hasLocationPermissionAndroid();
            },
          },
          {
            text: 'No',
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else if (result === RESULTS.GRANTED) {
      granted = true;
    }
  }
  return granted;
};
