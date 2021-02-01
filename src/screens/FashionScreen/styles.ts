import {StyleSheet} from 'react-native';
import {scale} from 'utils/Const';
// import {Fonts} from 'utils/Fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  vMain: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  vTabLeft: {
    // alignItems: 'center',
    width: '25%',
    height: '100%',
    marginTop: 5 * scale,
    backgroundColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  vTabRight: {
    width: '75%',
    height: '100%',
    // backgroundColor: 'blue',
  },
  txtGoiY: {
    fontSize: 16 * scale,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: 15 * scale,
  },
  vBorderBottom: {
    width: '100%',
    height: 1,
    backgroundColor: '#949494',
  },
  vStar: {
    width: '100%',
    alignItems: 'center',
    height: 100 * scale,
  },
  vButton: {
    width: 130 * scale,
    height: 140 * scale,
    margin: 5,
    borderRadius: 8 * scale,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  imgBTN: {
    marginTop: 10 * scale,
    width: 100 * scale,
    height: 100 * scale,
    borderRadius: 8 * scale,
  },
  txtTitleChild: {
    fontSize: 14 * scale,
    marginLeft: 7 * scale,
    // fontWeight: '500',
    // textAlign: 'center',
    marginTop: 10 * scale,
  },
});
