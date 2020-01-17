export default styles = {
  container: {
    height: 80,
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    margin: 5
  },

  todoText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "capitalize"
  },

  picture: {
    width: 50,
    height: 50,
    borderRadius: 10,
    position: "relative"
  },

  online: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    position: "absolute",
    zIndex: 1,
    left: 60,
    bottom: 15,
    backgroundColor: "#52de97"
  },

  delete: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7E9EF",
    marginLeft: 10
  },

  details: {
    height: 40,
    justifyContent: "space-between",
    marginLeft: 15
  }
};
