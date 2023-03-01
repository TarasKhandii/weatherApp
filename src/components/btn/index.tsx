/* -------------------------------- Libraries ------------------------------- */
import {TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
/* ---------------------------------- Style --------------------------------- */
import {ICONS} from '../../assets/icons';
import styles from './styles';

interface BtnProps {
  title?: string;
  onPress?: () => void;
}

const Btn: React.FC<BtnProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}> {title}</Text>
      <SvgXml xml={ICONS.arrow} />
    </TouchableOpacity>
  );
};
export default Btn;
