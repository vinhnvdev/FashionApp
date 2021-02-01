import {StyleSheet} from 'react-native';
import {scale} from 'utils/Const';
// import {Fonts} from 'utils/Fonts';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#ffffff',
    height: 50 * scale,
    // borderRadius: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  vBottom: {
    width: '20%',
    backgroundColor: '#F6E3CE',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  vBtnHome: {
    width: 92,
    height: 92,
    backgroundColor: '#ffffff',
    borderRadius: (92 / 2) * scale,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    zIndex: 1,
  },
  btnHome: {
    width: 60,
    height: 60,
    backgroundColor: '#F6E3CE',
    borderRadius: (60 / 2) * scale,
    justifyContent: 'center',
    position: 'absolute',
    top: -27,
    zIndex: 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  vHome: {
    width: '20%',
    backgroundColor: '#F6E3CE',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  vBackgroundHome: {
    width: 90 * scale,
    height: 30 * scale,
    backgroundColor: '#F6E3CE',
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
    opacity: 0.8,
  },
  vChild2: {
    width: 100,
    height: 70,
    // backgroundColor: 'green',
  },
  vChild3: {
    width: 100,
    height: 50,
    marginBottom: 10,
    borderBottomLeftRadius: 50 * scale,
    borderBottomRightRadius: 50 * scale,
    backgroundColor: '#ffffff',
    opacity: 0.3,
  },
  vChild: {
    width: 110 * scale,
    height: 110 * scale,
    borderRadius: (110 / 2) * scale,
    // backgroundColor: 'red',
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
    left: -11,
  },
  vBtnTabbar: {
    // flex: 1,
    width: 60 * scale,
    height: 60 * scale,
    backgroundColor: '#EFF8FB',
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vBtnRadius: {
    width: 46 * scale,
    height: 46 * scale,
    backgroundColor: '#F6E3CE',
    borderRadius: 46 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});