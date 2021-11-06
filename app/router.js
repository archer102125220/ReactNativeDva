import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//https://reactnavigation.org/docs/stack-actions/

import TabNavigator from './navigatorUI/TabNavigator';
import Login from './containers/Login';

const navigatorComponent = [
  { key: 'Login', name: 'Login', component: Login },
  { key: 'TabNavigator', name: 'TabNavigator', component: TabNavigator }
];
const navigatorOrtherContainer = [];

class MainNavigator extends Component {
  constructor(props) {
    super(props);
    const Navigator = createStackNavigator();
    this.state = { ...Navigator };
  }

  renderStackNavigators = (r, props) => {
    const { key, name, component, params } = r;
    const { Screen } = this.state;

    return (
      <Screen
        {...props}
        key={`stack-${key}`}
        name={name}
        component={component}
        params={params}
      />
    );
  }

  render() {
    const { props } = this;
    const { Navigator } = this.state;

    return (
      <Navigator>
        {
          navigatorComponent.map(element => this.renderStackNavigators(element, props))
        }
      </Navigator>
    );
  }
}

class Router extends Component {
  constructor(props) {
    super(props);
    const StackNavigator = createStackNavigator();
    this.state = { ...StackNavigator };
  }

  render() {
    const { props } = this;
    return (<NavigationContainer>
      <MainNavigator />
      {
        navigatorOrtherContainer.map(Element => <Element {...props} />)
      }
    </NavigationContainer>);
  }
}

export default Router;