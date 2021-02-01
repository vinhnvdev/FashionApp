import React, {useState} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  Text,
  View,
  RefreshControl,
  FlatList,
} from 'react-native';
import {scale} from 'utils/Const';
import {IconShopping, IconNotifi} from 'utils/Svg';
import styles from './style';
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 100 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const HomeScreen = (props: Props) => {
  const [scrollY] = useState(
    new Animated.Value(Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0),
  );
  const [refreshing, setRefreshing] = useState(false);
  const scrollYs = Animated.add(
    scrollY,
    Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
  );
  const headerTranslate = scrollYs.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollYs.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslate = scrollYs.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const _renderScrollViewContent = () => {
    const dataSource = ['Phong cách', 'Phong cách', 'Phong cách', 'Phong cách'];
    return (
      <View style={styles.scrollViewContent}>
        <Text style={styles.txtTitleChild}>{'Sản phẩm hot nhất'}</Text>
        <View style={styles.vList}>
          <FlatList
            data={dataSource}
            // numColumns={3}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => {
              return <View style={styles.row} />;
            }}
          />
        </View>
        {/* <View style={{height: 10 * scale}}/>
        <View style={{height: 10, backgroundColor: '#b0acac'}} />
        <View style={{height: 10 * scale}}/> */}
        <View style={{height: 20}} />
        <Text style={styles.txtTitleChild}>{'Sản phẩm khuyến mãi'}</Text>
        <View style={styles.vList}>
          <FlatList
            data={dataSource}
            // numColumns={3}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => {
              return <View style={styles.row} />;
            }}
          />
        </View>
        <View style={{height: 20}} />
        <Text style={styles.txtTitleChild}>{'Thời trang Nam & Nữ'}</Text>
        <View style={styles.vList}>
          <FlatList
            data={dataSource}
            // numColumns={3}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={(item, index) => {
              return <View style={styles.row} />;
            }}
          />
        </View>
        <View style={{height: 20}} />
        <Text style={styles.txtTitleChild}>{'Phụ kiện'}</Text>
        <View style={styles.vList}>
          <FlatList
            data={dataSource}
            // numColumns={3}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => {
              return <View style={styles.row} />;
            }}
          />
        </View>
        <View style={{height: 20}} />
        <Text style={styles.txtTitleChild}>{'Sản phẩm yêu thích'}</Text>
        <View style={styles.vList}>
          <FlatList
            data={dataSource}
            // numColumns={3}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => {
              return <View style={styles.row} />;
            }}
          />
        </View>
        <View style={{height: 30}} />
      </View>
    );
  };
  return (
    <View style={styles.fill}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.251)"
      />
      <Animated.ScrollView
        style={styles.fill}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 1000);
            }}
            // Android offset for RefreshControl
            progressViewOffset={HEADER_MAX_HEIGHT}
          />
        }
        // iOS offset for RefreshControl
        contentInset={{
          top: HEADER_MAX_HEIGHT,
        }}
        contentOffset={{
          y: -HEADER_MAX_HEIGHT,
        }}>
        {_renderScrollViewContent()}
      </Animated.ScrollView>
      <Animated.View
        pointerEvents="none"
        style={[styles.header, {transform: [{translateY: headerTranslate}]}]}>
        <Animated.Image
          style={[
            styles.backgroundImage,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslate}],
            },
          ]}
          source={{
            uri:
              'https://i.pinimg.com/originals/d1/8c/a5/d18ca5dc54b60ad2e5853544f1e7d1f1.jpg',
          }}
        />
      </Animated.View>
      <Animated.View style={[styles.bar]}>
        <Text style={styles.txtTitle}>{'Fashion Shop'}</Text>
        <IconNotifi width={35} height={30} />
        <View style={{width: 20 * scale}} />
        <IconShopping width={35} height={30} />
      </Animated.View>
    </View>
  );
  // }
};
export default HomeScreen;
