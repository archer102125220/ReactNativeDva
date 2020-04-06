import React, { Component } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
  NavigationContainer 
} from 'react-navigation';

import IndexPage from './containers/IndexPage';
import DemoPage from './containers/DemoPage';

const HomeNavigator = createBottomTabNavigator();

const MainNavigator = createStackNavigator();

const RootNavigator = createStackNavigator();

class Router extends Component {
    constructor(props){
        super(props);

    }

    render() {
        const {props} =this.props;
        return(<NavigationContainer {...props}>
            <RootNavigator.Navigator {...props} transitionConfig={() => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      }
    })}>
                <RootNavigator.Screen name='Main' component={
                    <MainNavigator.Navigator {...props}>
                        <MainNavigator.Screen name='HomeNavigator' component={
                            <HomeNavigator.Navigator {...props}>
                                <HomeNavigator.Screen {...props} name='IndexPage' component={IndexPage} />
                                <HomeNavigator.Screen {...props} name='DemoPage' component={DemoPage} />
                            </HomeNavigator.Navigator>
                        } />
                    </MainNavigator.Navigator>
                } />
            </RootNavigator.Navigator>
        </NavigationContainer>);
    }
}

export default Router;