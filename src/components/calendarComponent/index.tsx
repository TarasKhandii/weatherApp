/* ------------------------------ Basic Imports ----------------------------- */
import {useCallback, useMemo} from 'react';
/* -------------------------------- Libraries ------------------------------- */
import {Calendar, DateData} from 'react-native-calendars';
/* ---------------------------------- Style --------------------------------- */
import {COLORS} from '../../assets/colors';
import styles from './styles';

interface CalendarProps {
  state: string;
  setState: (date?: DateData) => void;
  data: string;
}

const CalendarComponent: React.FC<CalendarProps> = ({
  state,
  setState,
  data,
}) => {
  const onDayPress = useCallback((day: DateData) => {
    setState(day);
  }, []);
  const marked = useMemo(() => {
    return {
      [state]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: COLORS.blue,
        selectedTextColor: COLORS.white,
      },
    };
  }, [state]);

  return (
    <Calendar
      style={styles.calendar}
      enableSwipeMonths
      current={data}
      onDayPress={onDayPress}
      markedDates={marked}
      maxDate={data}
    />
  );
};

export default CalendarComponent;
