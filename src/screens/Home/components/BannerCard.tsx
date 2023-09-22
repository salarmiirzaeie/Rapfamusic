import {Text, View} from 'native-base';
import React from 'react';

const BannerCard = () => {
  return (
    <View h={160} w={200} rounded={15} bg={'red.400'}>
      <Text>xss</Text>
    </View>
  );
};

export default BannerCard;
