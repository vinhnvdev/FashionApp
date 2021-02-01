import {Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('screen');

const scale = width / 375 < 1.37 ? width / 375 : 1.37;
const fontScale = width / 375 < 1.2 ? width / 375 : 1.2;

const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
};

const ifIphoneX = (iphoneXStyle: number, regularStyle: number) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

const getStatusBarHeight = (safe: boolean) => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 40, 20),
    android: StatusBar.currentHeight,
  });
};
const BOTTOM_BAR_HEIGHT = 60 * scale;
export {scale, fontScale, getStatusBarHeight, BOTTOM_BAR_HEIGHT};
