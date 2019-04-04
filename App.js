/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Modal} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const posts = [
  {
    title: 'Beach',
    landscape: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
    intro: 'The idea with React Native Elements is more about component structure than actual design.',
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.`
  },
  {
    title: 'Paradise',
    landscape: 'https://commonsense.io/public/img/blog/posts/filtros.jpg',
    intro: 'The idea with React Native Elements is more about component structure than actual design.',
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.`
  }
]

type Props = {};
export default class App extends Component<Props> {
state = {
  modalVisible: false,
  currentElement: null
}

showDetail(currentElement, modalVisible) {
    this.setState({
      modalVisible,
      currentElement
    })
  }
  _renderItem = ({item, index}) => {
    return (
      <Card
        title={
          item.title
        }
        image={{ uri: item.landscape }}>
        <Text style={{ marginBottom: 10 }}>
          {
            item.intro
          }
        </Text>
        <Button
          onPress={() => this.showDetail(item, true)}
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='VIEW NOW' />
      </Card>
    )
  }
  render() {
  let { modalVisible, currentElement } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderItem}
        />

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          {currentElement && (<Card
            title={
              currentElement.title
            }
            image={{ uri: currentElement.landscape }}>
            <Text style={{ marginBottom: 10 }}>
              {
                currentElement.intro
              }
            </Text>
            <Text style={{ marginBottom: 10 }}>
              {
                currentElement.description
              }
            </Text>
            <Button
              onPress={() => this.showDetail(null, false)}
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='Close' />
          </Card>)
          }
          
        </Modal>
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
