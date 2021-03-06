import React, {Component} from 'react';

import {Dimensions} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Buy from '../components/Buy';
import Sell from '../components/Sell';
import History from '../components/History';
import HeaderView from '../components/HeaderView';
import Color from '../constant/colors'
const deviceHeight = Dimensions.get('window').height;

const TransactionsScreen = ({navigation}) => {
  
  return (
    <Container>
      <HeaderView navigation={navigation} title={'Transactions'} />

      <Tabs>
        <Tab
          activeTabStyle={{backgroundColor: Color.PRIMARY_COLOR}}
          tabStyle={{backgroundColor: Color.PRIMARY_COLOR}}
          heading="Stock In">
          <Buy  />
        </Tab>
        <Tab
          activeTabStyle={{backgroundColor:  Color.PRIMARY_COLOR}}
          tabStyle={{backgroundColor:Color.PRIMARY_COLOR}}
          heading="Stock Left">
          <Sell  />
        </Tab>
        {/* <Tab
          activeTabStyle={{backgroundColor: '#4796BD'}}
          tabStyle={{backgroundColor: '#4796BD'}}
          heading="History">
          <History />
        </Tab> */}
      </Tabs>
    </Container>
  );
};

export default TransactionsScreen;
