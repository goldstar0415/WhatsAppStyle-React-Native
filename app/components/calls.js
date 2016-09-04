/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import R from 'ramda';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  Image,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const images = R.range(0, 10).map(i => require(`../images/image${i}.jpeg`));
const data = [{
  "id": 1,
  "first_name": "Bruce",
  "incomming": true,
  "date": "25-Feb-2016",
  "time": "5:46 PM",
  "image": images[0]
}, {
  "id": 2,
  "first_name": "Albert",
  "incomming": true,
  "date": "31-Jan-2016",
  "time": "12:38 PM",
  "image": images[1]
}, {
  "id": 3,
  "first_name": "Douglas",
  "incomming": true,
  "date": "01-Jul-2016",
  "time": "1:33 PM",
  "image": images[2]
}, {
  "id": 4,
  "first_name": "Eugene",
  "incomming": true,
  "date": "19-Feb-2016",
  "time": "3:59 AM",
  "image": images[3]
}, {
  "id": 5,
  "first_name": "Michael",
  "incomming": true,
  "date": "12-Apr-2016",
  "time": "9:57 AM",
  "image": images[4]
}, {
  "id": 6,
  "first_name": "William",
  "incomming": false,
  "date": "13-Aug-2016",
  "time": "9:37 PM",
  "image": images[5]
}, {
  "id": 7,
  "first_name": "Joshua",
  "incomming": true,
  "date": "17-Dec-2015",
  "time": "4:32 AM",
  "image": images[6]
}, {
  "id": 8,
  "first_name": "Fred",
  "incomming": false,
  "date": "02-Dec-2015",
  "time": "12:56 AM",
  "image": images[7]
}, {
  "id": 9,
  "first_name": "Donald",
  "incomming": false,
  "date": "27-Oct-2015",
  "time": "9:02 PM",
  "image": images[8]
}, {
  "id": 10,
  "first_name": "Bruce",
  "incomming": true,
  "date": "13-Sep-2015",
  "time": "6:20 PM",
  "image": images[9]
}]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Calls extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  eachMessage(x){
    return (
      <TouchableOpacity>
        <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
          <Image source={x.image} style={{ borderRadius:30, width:60, height:60 }} resizeMode='contain' />
          <View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', width:260 }}>
            <Text style={{ marginLeft:15, fontWeight:'600', color:'#222' }}>{x.first_name}'s Mom</Text>
          </View>
          <View style={{ flexDirection:'row', alignItems:'center' }}>
            <Icon name="call-received" size={15} color="#ed788b" style={{ marginLeft:15, marginRight:5 }} />
            <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>{x.date} {x.time}</Text></View>
          </View>
          <Icon name="call" size={23} color='#777' style={{ marginRight:10 }} />
       </View>
     </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachMessage(rowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

