import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {SCREENS} from './screens';

export type RootStackScreenType<SCREEN extends keyof RootStackParamList> = FC<
  NativeStackScreenProps<RootStackParamList, SCREEN>
>;

export type RootStackParamList = {
  [SCREENS.home]: undefined;
  [SCREENS.forecastScreen]: {
    geoLocation: string;
  };
};
