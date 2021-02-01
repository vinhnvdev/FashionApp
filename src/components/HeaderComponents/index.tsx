import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { IconBack } from 'utils/Svg';
interface Props {
  navigation: any;
  title: String;
}

const HeaderComponents = (props: Props) => {
  const { navigation, title } = props;
  return (
    <View style={{ zIndex: 1, backgroundColor: 'red' }}>
      <View style ={styles.wrapStatusbar}>
        <StatusBar barStyle="dark-content" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.vBtnBack}>
          <IconBack height={17} width={17} />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
    </View>
  );
};
export default HeaderComponents;
