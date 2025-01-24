import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  registContainer: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "black",
    padding: 24,
    boxShadow: "4px 4px",
    display: "flex",
    gap: 12,
  },
  inputField: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: -10,
  },
  registerButton: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    marginTop: 12,
  },
  loginLink: {
    color: "blue",
  },
});
