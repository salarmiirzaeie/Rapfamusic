import {Text, View, useTheme} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const BannerCard = () => {
  const {width} = Dimensions.get('window');
  const {colors} = useTheme();
  return (
    <View
      h={160}
      w={width - 50}
      marginX={1}
      rounded={15}
      bg={colors.light[200]}>
      <Text>xss</Text>
    </View>
  );
};

export default BannerCard;
