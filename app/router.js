import React, { Component } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';

import IndexPage from './containers/IndexPage';
import DemoPage from './containers/DemoPage';
import Login from './containers/Login';

class HomeNavigator extends Component {
    constructor(props){
        super(props);
        const Navigator = createBottomTabNavigator()
        this.state = { ...Navigator };
    }

    render(){
        const { props, navigationOptions } = this;
        const { Navigator, Screen }=this.state;

        return(
            <Navigator {...props}>
                <Screen {...props} name='IndexPage' component={IndexPage} />
                <Screen {...props} name='DemoPage' component={DemoPage} />
            </Navigator>
        );
    }
}

class MainNavigator extends Component {
    constructor(props){
        super(props);
        const Navigator = createStackNavigator();
        this.state = { ...Navigator };
    }

    render(){
        const { props } =this;
        const { Navigator, Screen }=this.state;

        return(
            <Navigator {...props}>
                <Screen {...props} name='Login' component={Login} />
                <Screen {...props} name='HomeNavigator' component={HomeNavigator} />
            </Navigator>
        );
    }
}

class RootNavigator extends Component {
    constructor(props){
        super(props);
        const Navigator = createStackNavigator();
        this.state = { ...Navigator };
    }

    render(){
        const { props } =this;
        const { Navigator, Screen }=this.state;

        return(
            <Navigator {...props} transitionConfig={() => ({
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
                          <Screen {...props} name='MainNavigator' component={MainNavigator} />
            </Navigator>
        );
    }
}

class Router extends Component {
    constructor(props){
        super(props);
    }

    state={}

    render() {
        const {props} =this.props;
        return(<NavigationContainer {...props}>
            <RootNavigator  {...props}/>
        </NavigationContainer>);
    }
}

export default Router;