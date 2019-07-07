import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo";
import Proptypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#283048", "#FFE47A", "#283048"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-fog"
  },
  Smoke: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-fog"
  },
  Dust: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-fog"
  },
  Fog: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-fog"
  },
  Sand: {
    colors: ["#F09819", "#EDDE5D"],
    icon: "weather-fog"
  },
  Ash: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-fog"
  },
  Squall: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-fog"
  },
  Tornado: {
    colors: ["#D7D2CC", "#304352"],
    icon: "weather-hurricane"
  }
};

const Weather = ({ desc, temp, weatherName }) => {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          name={weatherCases[weatherName].icon}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{`${Math.floor(temp)}℃`}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherName}</Text>
        <Text style={styles.subtitle}>{`+ detail : ${desc}`}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.proptypes = {
  name: Proptypes.string.isRequired,
  temp: Proptypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
