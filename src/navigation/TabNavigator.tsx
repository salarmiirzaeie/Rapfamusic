import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Icon,
  IconButton,
  NativeBaseProvider,
  Text,
  useTheme,
} from 'native-base';
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const {colors} = useTheme();
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            margin: 10,
            borderRadius: 15,
            shadowColor: colors.light[200],
            height: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({focused}) => (
              <Fontisto
                style={{
                  color: focused ? colors.primary[200] : colors.light[200],
                }}
                name="home"
                size={20}
              />
            ),
            tabBarShowLabel: false,

            headerShown: false,
          }}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                style={{
                  color: focused ? colors.primary[200] : colors.light[200],
                }}
                name="search"
                size={20}
              />
            ),
            tabBarShowLabel: false,
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          name="Home1"
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                style={{
                  color: focused ? colors.primary[200] : colors.light[200],
                }}
                name="heart"
                size={23}
              />
            ),
            tabBarShowLabel: false,
          }}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                style={{
                  color: focused ? colors.primary[200] : colors.light[200],
                }}
                name="user-alt"
                size={20}
              />
            ),
            tabBarShowLabel: false,
          }}
          name="Search1"
          component={Search}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
};
