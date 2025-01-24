import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    display: "flex",
    gap: 12,
    borderWidth: 2,
    borderColor: "black",
    padding: 24,
    borderRadius: 8,
    boxShadow: "4px 4px",
  },
  carImage: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: "120%",
    left: 0,
  },
  username: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: -10,
  },
  password: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: -10,
  },
  loginButton: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
  },
  registerLink: {
    color: "blue",
  },
});
