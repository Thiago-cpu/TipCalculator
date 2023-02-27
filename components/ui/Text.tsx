import React from "react";
import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { useFonts, SpaceMono_700Bold } from "@expo-google-fonts/space-mono";
import { colors } from "../../colors";

interface Props extends TextProps {
  color?: "primary" | "secondary";
}

export default function Text({ style, color = "secondary", ...rest }: Props) {
  const [fontsLoaded] = useFonts({
    SpaceMono_700Bold,
  });
  if (!fontsLoaded) return null;
  return (
    <RNText
      style={[
        styles.text,
        {
          color: colors.text[color],
        },
        style,
      ]}
      {...rest}
    ></RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SpaceMono_700Bold",
    fontSize: 18,
    letterSpacing: 1,
    color: colors.text.secondary,
  },
});
