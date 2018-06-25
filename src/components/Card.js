import React from "react";
import PropTypes from "prop-types"
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const  DefaultImage  =  require("src/assets/fifa-world-cup-2018-balon-oficial.jpg")

export const Card = ({title, imageURL }) => {
  return(
  <View style={styles.container}>

    <Image source={{uri: imageURL}} style={styles.image}/>
    <View style={styles.infoContainer}>
      <Text style={styles.date}>{"Some hour ago"}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>)
};


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 300,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 0,
    backgroundColor: "rgba(0,0,0, 0.2)"
  },
  image: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 300,
    resizeMode: "cover"
  },
  date: {
    fontSize: 14,
    color: "white",
    paddingBottom: 5,
  },
  title: {
    fontSize: 28,
    color: "white"
  }
});

Card.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
}

export default Card;