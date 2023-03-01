/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';
/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: dw(20),
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderBottomColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    fontSize: 18,
  },
  temperature: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    fontSize: 20,
  },
  humidity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  humidityText: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 16,
    marginLeft: 4,
  },
});
export default styles;
