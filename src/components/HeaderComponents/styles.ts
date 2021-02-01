import {StyleSheet} from 'react-native';
import {scale} from 'utils/Const';
// import {Fonts} from 'utils/Fonts';
import {getStatusBarHeight} from 'utils/Const';
export default StyleSheet.create({
  wrapStatusbar: {
    height: getStatusBarHeight(false),
    backgroundColor: '#F6E3CE',
  },
  container: {
    width: '100%',
    height: 40 * scale,
    backgroundColor: '#F6E3CE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
  },
  vBtnBack: {
    position: 'absolute',
    left: '6%',
    bottom: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 18 * scale,
    color: '#2e2d2d',
    fontWeight: '600',
  },
});
