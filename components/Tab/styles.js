export default styles = {
  container: {
    height: 50,
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: 10
  },
  button: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "capitalize"
  },
  overlayStyle: {
    height: "100%",
    width: `${100 / 3}%`,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#2ad2fc",
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    shadowColor: "#E7E9EF",
    shadowOpacity: 0.5
  }
};

export const activeSlideStyle = activeSlide => {
  const style = {};

  if (activeSlide === "xTabOne") {
    style.borderTopLeftRadius = 10;
    style.borderBottomLeftRadius = 10;
  }

  if (activeSlide === "xTabThree") {
    style.borderTopRightRadius = 10;
    style.borderBottomRightRadius = 10;
  }

  return style;
};
