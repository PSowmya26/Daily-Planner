import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateTaskScreen from './screens/CreateTaskScreen';
import FeedScreen from './screens/FeedScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    Feed: { screen: FeedScreen },
    CreateTask: { screen: CreateTaskScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Feed') {
          return (
            <Image
              source={require('./assets/feed.png')}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName === 'CreateTask') {
          return (
            <Image
              source={require('./assets/scheduler.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const switchNavigator = createSwitchNavigator({
  //LoginScreen: { screen: LoginScreen },
  TabNavigator: { screen: TabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
