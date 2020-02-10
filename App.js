import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tab1Page from './components/tabs/Tab1Page';
import Tab2Page from './components/tabs/Tab2Page';
import Tab3Page from './components/tabs/Tab3Page';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tab1Component1 from './components/tabs/Tab1Components/Tab1Component1';
import Tab1Component2 from './components/tabs/Tab1Components/Tab1Component2';
import Tab1Component3 from './components/tabs/Tab1Components/Tab1Component3';

import Tab2Component1 from './components/tabs/Tab2Components/Tab2Component1';
import Tab2Component2 from './components/tabs/Tab2Components/Tab2Component2';
import Tab2Component3 from './components/tabs/Tab2Components/Tab2Component3';

import Tab3Component1 from './components/tabs/Tab3Components/Tab3Component1';
import Tab3Component2 from './components/tabs/Tab3Components/Tab3Component2';
import Tab3Component3 from './components/tabs/Tab3Components/Tab3Component3';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: Tab1Page
      }
    })
  },
  NewsFeed: {
    screen: createStackNavigator({
      NewsFeed: {
        screen: Tab2Page
      }
    })
  },
  Settings: {
    screen: createStackNavigator({
      Settings: {
        screen: Tab3Page
      }
    })
  }
});

const stackNav = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false
    }
  },
  PageSettings: {
    screen: Tab3Component1,
    navigationOptions: {
      headerShown: true
    }
  },
  Profile: {
    screen: Tab3Component2,
    navigationOptions: {
      headerShown: true
    }
  },
  Logout: {
    screen: Tab3Component3,
    navigationOptions: {
      headerShown: true
    }
  },
  Tab2Comp1: {
    screen: Tab2Component1,
    navigationOptions: {
      headerShown: true
    }
  },
  Tab2Comp2: {
    screen: Tab2Component2,
    navigationOptions: {
      headerShown: true
    }
  },
  Tab2Comp3: {
    screen: Tab2Component3,
    navigationOptions: {
      headerShown: true
    }
  },
  Tab1Comp1: {
    screen: Tab1Component1,
    navigationOptions: {
      headerShown: true
    }
  },
  Tab1Comp2: {
    screen: Tab1Component2,
    navigationOptions: {
      headerShown: true
    }
  },
  Tab1Comp3: {
    screen: Tab1Component3,
    navigationOptions: {
      headerShown: true
    }
  }
})

const tabsNav = createAppContainer(stackNav);

export default tabsNav;
