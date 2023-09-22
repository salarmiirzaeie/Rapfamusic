import {FlatList} from 'native-base';
import React from 'react';
import BannerCard from './BannerCard';

const BannerList = () => {
  const array = [1, 2, 3, 4];
  return (
    <FlatList horizontal data={array} renderItem={item => <BannerCard />} />
  );
};

export default BannerList;
