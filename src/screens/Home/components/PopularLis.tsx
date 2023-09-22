import {FlatList, Text, View} from 'native-base';
import React from 'react';
import PopularCard from './PopularCard';

const PopularLis = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View>
      <Text mt={2}>Popular</Text>
      <FlatList
        contentContainerStyle={{margin: -5}}
        mt={2}
        data={data}
        numColumns={3}
        renderItem={() => <PopularCard />}
      />
    </View>
  );
};

export default PopularLis;
