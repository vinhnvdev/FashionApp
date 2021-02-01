import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Header from '../../components/HeaderComponents';
import {IconStar} from '../../utils/Svg';
import TabbarLeftComponent from 'components/TabbarLeftComponents';
import {dataContentMen, dataWomen} from 'mocks/dataFashion';
const FashionScreen = (props: Props) => {
  const [isIndex, setIsIndex] = useState(-1);
  const onSelect = (index) => {
    setIsIndex(index);
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.vButton]}
        // onPress={() => onSelectOne(index)}
      >
        <Image
          source={{uri: item.img}}
          style={styles.imgBTN}
          resizeMode="stretch"
        />
        <Text style={styles.txtTitleChild}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={'Thời Trang'} />
      {/* <View style={{height: 5, width: '100%', backgroundColor: 'red'}}/> */}
      <View style={styles.vMain}>
        <View style={styles.vTabLeft}>
          <View style={styles.vStar}>
            <IconStar height={30} width={30} top={10} />
            <Text style={styles.txtGoiY}>{'Danh mục gợi ý'}</Text>
          </View>
          <View style={styles.vBorderBottom} />
          <TabbarLeftComponent onSelect={onSelect} />
        </View>
        <View style={styles.vTabRight}>
          <FlatList
            numColumns={2}
            data={isIndex === 1 ? dataWomen : dataContentMen}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};
export default FashionScreen;
