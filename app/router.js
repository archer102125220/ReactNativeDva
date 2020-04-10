import React, { Component } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';
//https://reactnavigation.org/docs/stack-actions/

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

class Router extends Component {
    constructor(props){
        super(props);
    }

    state={}

    render() {
        const {props} =this.props;
        return(<NavigationContainer {...props}>
            <MainNavigator  {...props}/>
        </NavigationContainer>);
    }
}

export default Router;