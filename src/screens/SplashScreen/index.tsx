import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/HeaderComponents';
interface Props {
  navigation: any;
}
const SplashScreen = (props: Props) => {
  const { navigation } = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GenderSelectScreen');
    }, 2000);
  });
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <Text>Page content</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
