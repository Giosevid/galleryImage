import React from 'react';
import {Container, Content} from 'native-base';
import axios from 'axios';
import ListGallery from '../../components/ListGallery';

export default function Gallery({navigation}) {
  const [galleryItems, setgalleryItems] = React.useState(null);

  React.useEffect(() => {
    getDataGallery();
  }, []);

  const getDataGallery = async () => {
    try {
      axios
        .get('https://picsum.photos/v2/list')
        .then((response) => {
          const posts = response.data;
          setgalleryItems(posts);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Content>
        <ListGallery list={galleryItems} navigation={navigation} />
      </Content>
    </Container>
  );
}
