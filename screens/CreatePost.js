import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }
    componentDidMount() {

    }

  render() {
    let preview_images = {
      image_1: require('../assets/IMG1.jpg'),
      image_2: require('../assets/IMG2.png'),
      image_3: require('../assets/IMG3.png'),
      image_4: require('../assets/IMG4.png'),
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}></Image>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: 'Image_1', value: 'image_1' },
                  { label: 'Image_2', value: 'image_2' },
                  { label: 'Image_3', value: 'image_3' },
                  { label: 'Image_4', value: 'image_4' }
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height: 40,
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{ backgroundColor: '#396322' }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{ backgroundColor: '#396322' }}
                labelStyle={{
                  color: 'white',
                }}
                arrowStyle={{
                  color: 'white',
                }}
                onChangeItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>

            <TextInput
              style={styles.inputFont}
              onChangeText={(caption) => this.setState({ caption })}
              placeholder={'Caption'}
              placeholderTextColor="black"
            />
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9c458',
  },
  androidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'Black',
    fontSize: 28,
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  inputFont: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: 'white',
  },
});
