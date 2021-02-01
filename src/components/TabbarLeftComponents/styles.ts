import {StyleSheet} from 'react-native';
import {scale} from 'utils/Const';
// import {Fonts} from 'utils/Fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  vButton: {
    width: '100%',
    height: 120 * scale,
    alignItems: 'center',
  },
  imgBTN: {
    width: 60 * scale,
    height: 60 * scale,
    borderRadius: (60 / 2) * scale,
  },
  txtTitle: {
    fontSize: 16 * scale,
    // fontWeight: '500',
    textAlign: 'center',
    marginTop: 10 * scale,
  },
  vBtnChild: {backgroundColor: 'red'},
  txtTitleChild: {
    fontSize: 14 * scale,
    marginLeft: 7 * scale,
    // fontWeight: '500',
    // textAlign: 'center',
    marginTop: 10 * scale,
  },
});
