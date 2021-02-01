import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, Text, Animated, Easing} from 'react-native';
import styles from './styles';
import {scale} from '../../utils/Const';
import {
  IconHome,
  IconSetting,
  IconStore,
  IconAcc,
  IconBookmark,
} from '../../utils/Svg';
interface Props {
  navigation: any;
  state: any;
  descriptors: any;
}

const CustormTabbar = (props: Props) => {
  const {navigation, state} = props;
  const [selectName, setSelectName] = useState('Home');
  const onSelect = (name) => {
    setSelectName(name);
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.vBottom}>
        <TouchableOpacity onPress={() => onSelect('Bookmark')}>
          <IconBookmark width={25} height={25} />
        </TouchableOpacity>
      </View>
      <View style={[styles.vBottom, {borderTopRightRadius: 50 * scale}]}>
        <TouchableOpacity
          style={{marginRight: 35 * scale}}
          onPress={() => onSelect('Accessories')}>
          <IconAcc width={30} height={35} />
        </TouchableOpacity>
      </View>
      <View style={[styles.vHome]}>
        <View style={styles.vBtnHome} />
        <TouchableOpacity
          style={styles.btnHome}
          onPress={() => onSelect('Home')}>
          <IconHome width={30} height={35} />
        </TouchableOpacity>
        {/* <View style={styles.vBtnHome} />
        <TouchableOpacity
          style={styles.btnHome}
          onPress={() => onSelect('Home')}>
          <IconHome width={30} height={35} />
        </TouchableOpacity>
        <View style={styles.vBackgroundHome}>
          <View style={styles.vChild}>
            <View style={styles.vChild2} />
            <View style={styles.vChild3} />
          </View>
        </View> */}
      </View>
      <View style={[styles.vBottom, {borderTopLeftRadius: 50 * scale}]}>
        <TouchableOpacity
          style={{marginLeft: 35 * scale}}
          onPress={() => onSelect('Fashion')}>
          <IconStore width={30} height={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.vBottom}>
        <TouchableOpacity onPress={() => onSelect('Setting')}>
          <IconSetting width={35} height={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustormTabbar;
