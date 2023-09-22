import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import BannerCard from './components/BannerCard';
import BannerList from './components/BannerList';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View flex={1} p={2}>
      <ScrollView>
        <BannerList />
      </ScrollView>
    </View>
  );
};

export default Home;
