import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import Header from 'components/HeaderComponents';
import {
  IconQuanLy,
  IconLocation,
  IconCard,
  IconView,
  IconSettingss,
  IconLogout,
} from 'utils/Svg';
import { scale } from 'utils/Const';
const SettingScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Header title={'Thông tin'} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.vMain}>
        <View style={styles.vHeaderMain}>
          <View style={styles.vImgProfile} />
          <Text style={styles.txtName}>{'Nguyen Van A'}</Text>
        </View>
        <View style={styles.vContentMain}>
          <View style={styles.vTitleChild}>
            <IconQuanLy width={30} height={30} />
            <Text style={styles.txtTitleChild}>{'Quản lý đơn hàng'}</Text>
          </View>
          <View style={styles.vChild}>
            <Text style={styles.txtChild}>{'- Shop đã tiếp nhận'}</Text>
            <Text style={styles.txtChild}>{'- Đơn hàng chờ thanh toán'}</Text>
            <Text style={styles.txtChild}>
              {'- Đơn hàng đang chờ thanh toán'}
            </Text>
            <Text style={styles.txtChild}>
              {'- Đơn hàng đang chờ vận chuyển'}
            </Text>
            <Text style={styles.txtChild}>{'- Đơn hàng thành công'}</Text>
            <Text style={styles.txtChild}>{'- Đơn hàng đã huỷ'}</Text>
          </View>
          <View style={styles.vTitleChild}>
            <IconLocation width={30} height={30} />
            <Text style={styles.txtTitleChild}>{'Sổ địa chỉ'}</Text>
          </View>
          <View style={styles.vTitleChild}>
            <IconCard width={30} height={30} />
            <Text style={styles.txtTitleChild}>{'Thông tin thanh toán'}</Text>
          </View>
          <View style={styles.vTitleChild}>
            <IconView width={30} height={30} />
            <Text style={styles.txtTitleChild}>{'Sản phẩm đã xem'}</Text>
          </View>
          <View style={styles.vTitleChild}>
            <IconSettingss width={30} height={30} />
            <Text style={styles.txtTitleChild}>{'Cài đặt'}</Text>
          </View>
          <View style={styles.vLogout}>
            <TouchableOpacity style={styles.btnLogout}>
              <View style={{position: 'absolute', left: 20 * scale}}>
                <IconLogout width={25} height={25} />
              </View>

              <Text style={styles.txtLogout}>{'Đăng xuất'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SettingScreen;
