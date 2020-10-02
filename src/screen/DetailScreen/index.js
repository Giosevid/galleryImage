import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

export default function DetailScreen({ route: {params} }) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ImageBackground source={{ uri: params.dataGallery.download_url }} style={{flex: 1, resizeMode: "cover", justifyContent: 'flex-end', alignItems: 'center'}}>
      <Text style={{color: 'white', marginBottom: 40, fontSize: 30}}>{params.dataGallery.author}</Text>
      </ImageBackground>
    </View>
  );
}
