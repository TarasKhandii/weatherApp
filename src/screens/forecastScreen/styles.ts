/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';
/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    marginTop: 20,
  },
  svg: {
    transform: [{rotate: '180deg'}],
    position: 'absolute',
    left: 16,
    top: 10,
    color: COLORS.white,
  },
  title: {
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    fontSize: 28,
    color: COLORS.black,
    alignSelf: 'center',
  },
  block: {
    // flex: 1,
    // width: 100,
    // height: 100,
    marginTop: 40,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    marginHorizontal: dw(20),
  },
});
export default styles;
