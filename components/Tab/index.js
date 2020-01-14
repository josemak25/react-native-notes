import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../Button";
import styles, { activeSlideStyle } from "./styles";
import Animated, { Easing } from "react-native-reanimated";

export default function Tab() {
  const [state, setState] = useState({
    active: "xTabOne",
    xTabOne: 0,
    xTabTwo: 0,
    xTabThree: 0,
    translateX: new Animated.Value(0)
  });

  const handleLayout = (event, tab) => {
    const { x: position } = event.nativeEvent.layout;

    setState({ ...state, [tab]: position });
  };

  const handleClick = active => {
    setState({ ...state, active });
    handleSlide(active);
  };

  const handleSlide = active => {
    const { translateX } = state;
    Animated.timing(translateX, {
      toValue: state[active],
      duration: 500,
      easing: Easing.back()
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.overlayStyle,
          {
            ...activeSlideStyle(state.active),
            transform: [
              {
                translateX: state.translateX
              }
            ]
          }
        ]}
      />
      <Button
        style={styles.button}
        onLayout={event => handleLayout(event, "xTabOne")}
        onPress={() => handleClick("xTabOne")}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: state.active === "xTabOne" ? "black" : "#818993"
            }
          ]}
        >
          in progress
        </Text>
      </Button>
      <Button
        style={[
          styles.button,
          {
            borderRadius: 0,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderColor: "#f3f5fa"
          }
        ]}
        onLayout={event => handleLayout(event, "xTabTwo")}
        onPress={() => handleClick("xTabTwo")}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: state.active === "xTabTwo" ? "black" : "#818993"
            }
          ]}
        >
          assigned
        </Text>
      </Button>
      <Button
        style={styles.button}
        onLayout={event => handleLayout(event, "xTabThree")}
        onPress={() => handleClick("xTabThree")}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: state.active === "xTabThree" ? "black" : "#818993"
            }
          ]}
        >
          completed
        </Text>
      </Button>
    </View>
  );
}
