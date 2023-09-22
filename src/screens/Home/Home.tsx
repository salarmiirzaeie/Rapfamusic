import {NativeBaseProvider, ScrollView, Text, View} from 'native-base';
import React from 'react';
import BannerCard from './components/BannerCard';
import BannerList from './components/BannerList';
import NewestList from './components/NewestList';
import PopularLis from './components/PopularLis';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <NativeBaseProvider>
      <View flex={1} p={2}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BannerList />

          <NewestList />
          <PopularLis />
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default Home;
