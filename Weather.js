import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons
            style={styles.icon}
            name="ios-rainy"
            size={100}
            color="white"
          />
          <Text style={styles.temp}>24ºC</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like a Tears</Text>
          <Text style={styles.subtitle}>For more Info, look outside</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    marginBottom: 10
  },
  temp: {
    fontSize: 40,
    color: "white"
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 24
  },
  title: {
    fontSize: 35,
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 15,
    color: "white",
    marginBottom: 24
  }
});
