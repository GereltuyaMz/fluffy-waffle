import { StyleSheet, Dimensions, Image } from 'react-native';
import { Block, Text } from 'galio-framework';

const { width } = Dimensions.get('screen');

const NewsDetail = () => {
  return (
    <Block>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' }} style={styles.imageStyles} />
      <Text h5 style={{ marginBottom: 20, padding: 10 }}>Announcement</Text>
      <Text style={{ padding: 10, textAlign: "justify", lineHeight: 25, fontSize: 16 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem soluta quaerat harum eum beatae debitis et nam voluptates ex magni modi porro, sequi, ea odio cum eos tempora consequatur.</Text>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  imageStyles: {
    width: width,
    height: 300,
    marginBottom: 20
  }
});

export default NewsDetail