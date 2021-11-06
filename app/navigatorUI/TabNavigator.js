import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IndexPage from './../containers/IndexPage';
import DemoPage from './../containers/DemoPage';

const tabComponents = [
  { key: 'IndexPage', name: 'IndexPage', component: IndexPage },
  { key: 'DemoPage', name: 'DemoPage', component: DemoPage },
];

class TabNavigator extends Component {
  constructor(props) {
    super(props);
    const Navigator = createBottomTabNavigator();
    this.state = { ...Navigator };
  }

  renderTabNavigators = (r, props) => {
    const { key, name, component, params } = r;
    const { Navigator, Screen } = this.state;

    return (
      <Screen
        key={`tab-${key}`}
        name={name}
        component={component}
        params={params}
      />
    );
  }

  render() {
    const { props, navigationOptions } = this;
    const { Navigator, Screen } = this.state;
    //console.log(props);
    return (
      <Navigator>
        {
          /*<Screen name='IndexPage' component={IndexPage} />
          <Screen name='DemoPage' component={DemoPage} />*/
        }
        {
          tabComponents.map(element => this.renderTabNavigators(element, props))
        }
      </Navigator>
    );
  }
}

export default TabNavigator;