import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "src/components/Card"

export class Feed extends React.Component {
  componentDidMount() {
    const {loadFeed} = this.props;

    loadFeed();
  }


  render() {
    const keyExtractor = (item, index) => index;
    const renderItem = ({ item }) => (
      <Card title={item.teaser ? item.teaser.title : "No data"} imageURL={item.teaser ? item.teaser.imageUrl : null}/>
    );

    const ListEmptyComponent = (
      <View >
        <Text> No items </Text>
      </View>
    );

    return (
      <View >

        <FlatList
          data={this.props.data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    );
  }
}

export default Feed;