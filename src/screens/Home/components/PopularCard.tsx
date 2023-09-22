import {Box} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const PopularCard = () => {
  const {width} = Dimensions.get('window');

  return (
    <Box m={1} w={width / 3.25} rounded={15} bg={'info.400'} p={1}>
      <Box bg="red.400" rounded={15} h={width / 3}>
        xs
      </Box>
    </Box>
  );
};

export default PopularCard;
