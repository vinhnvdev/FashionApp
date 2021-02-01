import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../components/HeaderComponents';
import {selectGender} from 'redux/actions/SelectGenderActions';
import {useDispatch, useSelector} from 'react-redux';
import {scale} from 'utils/Const';
interface Props {
  navigation: any;
}
const GenderSelectScreen = (props: Props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const onSelect = (param: string) => {
    console.log(param, 'param');
    dispatch(selectGender(param));
    navigation.navigate('Tabbar');
  };
  let isGender = useSelector((state: any) => state);
  return (
    <View style={styles.container}>
      <Header title={'Giới tính'} />
      <View style={styles.vMain}>
        <View style={{height: 50 * scale}} />
        <TouchableOpacity
          style={styles.vChildGender}
          onPress={() => onSelect('Men')}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            }}
            style={styles.imgGender}
          />
          <Text style={styles.txtGender}>{'Men'}</Text>
        </TouchableOpacity>
        <View style={{height: 60 * scale}} />
        <TouchableOpacity
          style={styles.vChildGender}
          onPress={() => onSelect('Women')}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            }}
            style={styles.imgGender}
          />
          <Text style={styles.txtGender}>{'Women'}</Text>
        </TouchableOpacity>
        <View style={styles.vTextIntro}>
          <Text style={styles.txtIntro}>
            {'You can change this preference anytime in your Settings'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GenderSelectScreen;
