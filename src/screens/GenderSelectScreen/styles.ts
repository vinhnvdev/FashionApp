import {StyleSheet} from 'react-native';
import {scale} from 'utils/Const';
// import {Fonts} from 'utils/Fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  vMain: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imgGender: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    marginTop: 20 * scale,
  },
  txtGender: {
    fontSize: 16 * scale,
    marginTop: 10 * scale,
    color: '#2e2d2d',
    fontWeight: '500',
  },
  txtIntro: {
    fontSize: 14 * scale,
    marginTop: 10 * scale,
    color: '#2e2d2d',
    textAlign: 'center',
  },
  vChildGender: {alignItems: 'center'},
  vTextIntro: {
    width: '60%',
    height: 60 * scale,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
  },
});
