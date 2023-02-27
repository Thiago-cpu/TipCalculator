import { BackHandler, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

export default function CloseApp() {
  const onPress = () => {
    BackHandler.exitApp();
  };
  return (
    <Button
      title="Close App"
      onPress={onPress}
      containerStyle={styles.container}
      buttonStyle={styles.button}
    >
      <Icon name="close" />
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "transparent",
  },
});
