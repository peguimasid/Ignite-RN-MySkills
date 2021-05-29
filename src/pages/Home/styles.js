import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    backgroundColor: "#121015",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    padding: 15,
    borderRadius: 7,
    marginTop: 30,
  },
  skillContainer: {
    backgroundColor: "#1F1E25",
    padding: 15,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  skillText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",
  },
});

export default styles;
