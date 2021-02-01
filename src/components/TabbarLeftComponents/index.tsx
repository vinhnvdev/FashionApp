import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import {dataTabbar} from 'mocks/dataFashion';
import {scale} from 'utils/Const';
interface Props {
  navigation: any;
  state: any;
  descriptors: any;
  onSelect: () => void;
}
const BookmarkScreen = (props: Props) => {
  const {onSelect} = props;
  // const [isIndex, setIsIndex] = useState(-1);
  const onSelectOne = (index) => {
    onSelect(index);
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.vButton]}
        onPress={() => onSelectOne(index)}>
        <Image
          source={{uri: item.img}}
          style={styles.imgBTN}
          resizeMode="stretch"
        />
        <Text style={styles.txtTitle}>{item.title}</Text>
        {/* {isIndex === 0 ? (
          <View style={styles.vBtnChild}>
            <Text style={styles.txtTitleChild}>{'- Áo khoác nam'}</Text>
            <Text style={styles.txtTitleChild}>{'- Áo thun nam'}</Text>
            <Text style={styles.txtTitleChild}>{'- Áo sơ mi nam'}</Text>
            <Text style={styles.txtTitleChild}>{'- Quần jean nam'}</Text>
            <Text style={styles.txtTitleChild}>{'- Quần âu nam'}</Text>
          </View>
        ) : (
          <View style={styles.vBtnChild}>
            <Text style={styles.txtTitleChild}>{'- Áo khoác nữ'}</Text>
            <Text style={styles.txtTitleChild}>{'- Áo thun nữ'}</Text>
            <Text style={styles.txtTitleChild}>{'- Áo sơ mi nữ'}</Text>
            <Text style={styles.txtTitleChild}>{'- Quần jean nữ'}</Text>
            <Text style={styles.txtTitleChild}>{'- Quần âu nữ'}</Text>
          </View>
        )} */}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{height: 20 * scale}} />
      <FlatList
        data={dataTabbar}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default BookmarkScreen;
