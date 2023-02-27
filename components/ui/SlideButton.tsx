import React from "react";
import { View, Pressable, StyleSheet, PressableProps } from "react-native";
import { colors } from "../../colors";
import Text from "./Text";

interface Props {
  label: string | number;
  prev?: PressableProps;
  next?: PressableProps;
}

export default function SlideButton({ label, prev = {}, next = {} }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            borderRightColor: pressed ? colors.secondary : colors.primary,
          },
          styles.triangleBase,
          styles.triangleLeft,
        ]}
        {...prev}
      ></Pressable>
      <View style={styles.content}>
        <Text color="primary" style={styles.contentText}>
          {label}
        </Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            borderLeftColor: pressed ? colors.secondary : colors.primary,
          },
          styles.triangleBase,
          styles.triangleRight,
        ]}
        {...next}
      ></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    marginHorizontal: 10,
    alignContent: "center",
    justifyContent: "center",
    width: 150,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  contentText: {
    textAlign: "center",
  },
  triangleBase: {
    height: 60,
    width: 30,
  },
  triangleRight: {
    borderTopWidth: 30,
    borderRightWidth: 0,
    borderBottomWidth: 30,
    borderLeftWidth: 30,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
  },
  triangleLeft: {
    borderTopWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 30,
    borderLeftWidth: 0,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
});
