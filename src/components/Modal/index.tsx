import React, { ReactNode, useEffect, useState } from "react";

import { Container, Indicator, StyledModal } from "./styles";
import { Animated } from "react-native";
import { SIZES } from "../../constants/sizes";

type TModal = {
  children: ReactNode;
  show: boolean;
  close: Function;
};

const Modal: React.FC<TModal> = ({ children, show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(SIZES.height),
    modal: new Animated.Value(SIZES.height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: SIZES.height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: SIZES.height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  return (
    <Container
      style={{
        opacity: state.opacity,
        transform: [{ translateY: state.container }],
      }}
    >
      <StyledModal
        style={{
          transform: [{ translateY: state.modal }],
        }}
      >
        <Indicator />
        {children}
      </StyledModal>
    </Container>
  );
};

export default Modal;
