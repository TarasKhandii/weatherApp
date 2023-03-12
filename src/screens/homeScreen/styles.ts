/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';
/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  homeScreens: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  container: {
    backgroundColor: COLORS.blue,
    marginHorizontal: dw(26),
    height: '45%',
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    marginBottom: 40,
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    fontSize: 28,
    color: COLORS.black,
    alignSelf: 'center',
  },
  subTitle: {
    color: COLORS.white,
    fontSize: 20,
    marginTop: 8,
  },
  temp: {
    color: COLORS.white,
    fontSize: 32,
  },
  lineBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 'auto',
    justifyContent: 'center',
    width: '100%',
  },
  lineHorizontal: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 1,
    margin: 'auto',
  },
  lineVertical: {
    height: '100%',
    backgroundColor: COLORS.white,
    width: 1,
    alignSelf: 'center',
    position: 'absolute',
  },

  btn: {
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: dw(26),
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 80,
    width: 80,
  },
});

export default styles;
