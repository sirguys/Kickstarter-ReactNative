import React from 'react'
import { Component } from 'react'
import { View, Text, AppRegistry, TouchableOpacity, TextInput, Image } from 'react-native'

class App extends Component {
  constructor() {
    super()
    this.name = 'Refresh'
    this.number = 20
    this.result = ''
  }

  render() {
    let coffee = ['SirGuys', 'Sarawut']
    let item = [ ]
    let itemView = { color:'white', background:'lightblue', padding:10, borderRadius:20, margin:10, textAlign:'center',width:90 }
    for (let i of coffee) {
      item.push(<Text style={itemView}>{i}</Text>)
    }

    let textView = { color:'white', background:'salmon', padding:10, borderRadius:5, margin:10 }
    let btn = {background:'hotpink', padding:10, margin:5,
              width:20, height: 20, textAlign:'center',
              fontSize:20, color:'white', borderRadius:5}

    let imgData = ['SirGuys', 'Sarawut', 'Kodkeaw']
    let imgItem = [ ]
    for (let d of imgData) {
      imgItem.push(<TouchableOpacity style={{flexDirection:'row', margin:5}}>
          <Image style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <Text style={{marginTop:15, marginLeft:5}}>{d}</Text>
        </TouchableOpacity>)
    }

    return <View style = {{padding:10}}>
        <Text style={textView}>Welcome to React Native</Text>
        {item}
        <TouchableOpacity onPress={ () => this.test() }>
          {this.name}
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <TouchableOpacity onPress={ () => this.plus() }>
            <Text style={btn}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.minus() }>
            <Text style={btn}>-</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize:40, textAlign:'center' }}>{this.number}</Text>
        <View>
          <TextInput style={{borderWidth:1}}
            onChangeText={ s => this.typing(s) }
            placeholder='typing'
            ></TextInput>
          <Text>Hello {this.press}</Text>
        </View>
        <View>
          <TextInput style={{borderWidth:1, padding:3,
            marginBottom:10, borderColor:'lightblue'}}
            placeholder='City' onChangeText= { s => this.zip(s) }
            ></TextInput>
          <Text>Result: {this.result}</Text>
        </View>
        <View>
          <View>{imgItem}</View>
        </View>

      </View>
  }
    test() {
      this.name = 'Hello'
      this.setState({})
  }

    typing(s) {
      this.press = s
      this.setState({})
  }

  zip(s) {
    let data = {
      'Dusit': '10300',
      'Bangrak': '10500',
      'Bangraknoi': '11000',
      'Ranong': '85000'
    }
    this.result = data[s]
    if (this.result == null) {
      this.result = 'not found'
    }
    this.setState({})
  }

    plus() {this.number++; this.setState({})}
    minus() {this.number--; this.setState({})}

}
AppRegistry.registerComponent('App', () => App)
