import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native'; 
import { Header } from 'react-native/Libraries/NewAppScreen';
  
import Button from './../components/Button';
import Socket from './../utils/socket';
import yay from '../assets/yay.jpg';

const styles =  StyleSheet.create({
  normal: {
    fontFamily: 'Georgia, sans-serif',
    marginTop: '3em',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    letterSpacing: '-1px',
  },
  welcome: {
    height: '328px',
    background: `url(${yay}) no-repeat center 0`,
    backgroundSize: '388px 328px',
  },
  list: {
    fontSize: '1.2em',
    marginTop: '1.8em',
    listStyle: 'none',
    lineHeight: '1.5em',
    '& code': {
      background: '#f7f7f7',
    }
  },
});

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  GET_UserList: (payload, callback, loading) => dispatch({ type: 'userList/GET_UserList', payload, callback, loading }),
});


class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>
                <Header />
                {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                    <Text style={styles.footer}>Engine: Hermes</Text>
                  </View>
                )}
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                    Edit <Text style={styles.highlight}>App.js</Text> to change this
                    screen and then come back to see your edits.
                </Text>
                </View>
                <Button onPress={function(){ console.log('按到我了') }}>
                  TouchableOpacity Button
                </Button>
            </View>
            </ScrollView>
            </SafeAreaView>
        </>
    );
  }
  static propTypes = {
    users: PropTypes.array,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);