import {FlatList, Text, View} from 'native-base';
import React from 'react';
import MusicCard from './MusicCard';

const NewestList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <View mt={2} h={180}>
      <View mb={2} flexDir={'row'} justifyContent={'space-between'}>
        <Text>Newest</Text>
        <Text>show all</Text>
      </View>
      <FlatList
        contentContainerStyle={{marginHorizontal: -5}}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={() => <MusicCard />}
      />
    </View>
  );
};

export default NewestList;
