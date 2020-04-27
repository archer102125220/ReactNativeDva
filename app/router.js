import React, { Component } from 'react';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';
//https://reactnavigation.org/docs/stack-actions/

import IndexPage from './containers/IndexPage';
import DemoPage from './containers/DemoPage';
import Login from './containers/Login';

const tabComponents = [
    { key: 'IndexPage', name: 'IndexPage', component: IndexPage },
    { key: 'DemoPage', name: 'DemoPage', component: DemoPage },
];

const navigatorComponent = [
    { key: 'Login', name: 'Login', component: Login },
    { key: 'TabNavigator', name: 'TabNavigator', component: TabNavigator, params:{ renderElements:tabComponents } }
];

class TabNavigator extends Component {
    constructor(props){
        super(props);
        const Navigator = createBottomTabNavigator();
        this.state = { ...Navigator };
    }

    renderTabNavigators = (r, props) => {
        const { key, name, component, params } = r;
        const { Navigator, Screen } = this.state;

        return (
            <Navigator>
                <Screen
                    key={`tab-${key}`}
                    name={name}
                    component={component}
                    params={params}
                />
            </Navigator>
        );
    }

    render(){
        const { props, navigationOptions } = this;
        const { Navigator, Screen }=this.state;
        //console.log(props);
        return(
            <Navigator>
                <Screen name='IndexPage' component={IndexPage} />
                <Screen name='DemoPage' component={DemoPage} />
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
        const { props } = this;
        const { Navigator, Screen } = this.state;

        return(
            <Navigator>
                <Screen name='Login' component={Login} />
                <Screen name='TabNavigator' component={TabNavigator} />
            </Navigator>
        );
    }
}

class Router extends Component {
    constructor(props){
        super(props);
        const StackNavigator = createStackNavigator();
        this.state = { ...StackNavigator };
    }

    renderStackNavigators = (r, props) => {
        const { key, name, component } = r;
        const { Navigator, Screen } = this.state;

        return (
            <Navigator>
                <Screen
                    key={`stack-${key}`}
                    name={name}
                    component={component}
                />
            </Navigator>
        );
    }

    render() {
        const { props } = this;
        return(<NavigationContainer>
            <MainNavigator />
        </NavigationContainer>);
    }
}

export default Router;