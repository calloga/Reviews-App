import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 0,
    marginTop: 0,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 0,
  },
  titleText: {
    flex: 1,
    marginTop: 10,
    fontFamily: "Montserrat",
    fontSize: 18,
    color: "black",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
