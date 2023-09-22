import {Box} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const MusicCard = () => {
  const {width} = Dimensions.get('window');

  return (
    <Box marginX={1} w={width / 3} rounded={15} bg={'info.400'} p={1}>
      <Box bg="red.400" rounded={15} h="60%">
        xs
      </Box>
    </Box>
  );
};

export default MusicCard;
