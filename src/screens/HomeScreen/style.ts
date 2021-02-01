import {StyleSheet, Platform} from 'react-native';
import {scale} from 'utils/Const';
// import {Fonts} from 'utils/Fonts';
const HEADER_MAX_HEIGHT = 250;
export default StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#de1818',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  txtTitle: {flex: 1, fontSize: 26, color: '#ffffff', fontWeight: '600'},
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15 * scale,
    // justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    paddingHorizontal: 15 * scale,
    marginTop: 20 * scale,
  },
  row: {
    height: 180 * scale,
    width: 140 * scale,
    margin: 10 * scale,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8 * scale,
  },
  child: {width: '100%', justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'},
  txtTitleChild: {
    fontSize: 18 * scale,
    fontWeight: '600',
  },
  vList: {
    width: '100%',
    height: 200 * scale,
    marginTop: 10 * scale,
    // borderWidth: 0.5 * scale,
    // borderColor: '#a6a6a6',
    // borderRadius: 8 * scale,
  },
});
