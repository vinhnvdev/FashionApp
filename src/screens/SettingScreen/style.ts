import {StyleSheet} from 'react-native';
import {scale} from 'utils/Const';
// import {Fonts} from 'utils/Fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  vMain: {
    width: '100%',
    height: '100%',
  },
  vHeaderMain: {
    paddingVertical: 20 * scale,
    width: '100%',
    height: 200 * scale,
    alignItems: 'center',
  },
  vImgProfile: {
    width: 120 * scale,
    height: 120 * scale,
    borderRadius: (120 / 2) * scale,
    backgroundColor: 'pink',
  },
  txtName: {
    fontSize: 18 * scale,
    fontWeight: '600',
    marginVertical: 15 * scale,
  },
  vContentMain: {
    width: '100%',
    height: 600 * scale,
    // paddingHorizontal: 15 * scale,
  },
  vTitleChild: {
    width: '100%',
    height: 50 * scale,
    backgroundColor: '#e8e8e8',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    paddingHorizontal: 10 * scale,
  },
  vChild: {
    paddingVertical: 15 * scale,
    width: '100%',

    height: 200 * scale,
    paddingHorizontal: 40 * scale,
    marginBottom: 15 * scale,
  },
  txtTitleChild: {
    fontSize: 14 * scale,
    fontWeight: '500',
    marginLeft: 13 * scale,
  },
  txtChild: {
    marginBottom: 15 * scale,
    fontSize: 14 * scale,
    marginLeft: 10 * scale,
  },
  vLogout: {
    width: '100%',
    marginTop: 50 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogout: {
    width: '70%',
    height: 50 * scale,
    borderRadius: 10 * scale,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f7a243',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  txtLogout: {
    fontSize: 18 * scale,
    fontWeight: '600',
    color: '#ffffff',
  },
});
