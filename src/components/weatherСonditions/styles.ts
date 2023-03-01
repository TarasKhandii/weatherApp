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
    padding: dw(20),
    alignItems: 'center',
  },
  block: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  name: {
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    fontSize: 16,
    color: COLORS.white,
    textTransform: 'uppercase',
    marginBottom: dw(8),
    opacity: 0.7,
  },
  value: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 16,
    color: COLORS.white,
  },
});
export default styles;
