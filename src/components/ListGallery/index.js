import React from 'react';
import {FlatList, Image, Dimensions, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

let {width, height} = Dimensions.get('window');

export default function ListGallery({navigation, list}) {
  const renderItem = (data) => {
    let newIndex = data.index + 1;
    return (
      <Animatable.View style={{flex: 1, alignItems: 'center'}} animation="zoomIn" delay={newIndex * 500}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', {dataGallery: data.item})}>
          <Image source={{uri: data.item.download_url}} style={{width: width / 2 , height: height / 2}} resizeMode="cover"/>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <>
      <FlatList
        data={list}
        renderItem={renderItem}
        numColumns={2}
        horizontal={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
}
