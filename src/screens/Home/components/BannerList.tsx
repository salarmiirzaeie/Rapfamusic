import {FlatList} from 'native-base';
import React from 'react';
import BannerCard from './BannerCard';

const BannerList = () => {
  const array = [1, 2, 3, 4];
  return (
    <FlatList
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{marginHorizontal: -5}}
      horizontal
      data={array}
      renderItem={item => <BannerCard />}
    />
  );
};

export default BannerList;
