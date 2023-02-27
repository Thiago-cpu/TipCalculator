import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Input, Icon } from "@rneui/themed";
import { useTipCalculator } from "./hooks/useTipCalculator";
import Text from "./components/ui/Text";
import { SpaceMono_700Bold, useFonts } from "@expo-google-fonts/space-mono";
import { colors } from "./colors";
import SlideButton from "./components/ui/SlideButton";
import Bill from "./components/Bill";
import math from "./math";

export default function App() {
  const { bill, changeBill, tipSlide, peopleSlide, totalTip, tipPerPerson } =
    useTipCalculator();
  const [fontsLoaded] = useFonts({
    SpaceMono_700Bold,
  });
  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-white py-6 px-4" style={styles.container}>
        <StatusBar translucent={true} style="auto" />
        <Text>Bill</Text>
        <Input
          leftIcon={
            <Icon
              name="attach-money"
              type="material"
              size={24}
              color="#AEC6C6"
            />
          }
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          containerStyle={{
            marginTop: 4,
            paddingHorizontal: 0,
          }}
          keyboardType="numeric"
          value={bill.toString()}
          onChangeText={(value) => changeBill(value)}
        />
        <Text>Select Tip %</Text>
        <SlideButton
          label={`${math.multiply(tipSlide.n, 100)}%`}
          prev={{
            onPress: () => tipSlide.subtract(math.bignumber(0.01)),
            onLongPress: () => tipSlide.longSubtract(math.bignumber(0.01)),
            onPressOut: () => tipSlide.stopLongSub(),
          }}
          next={{
            onPress: () => tipSlide.add(math.bignumber(0.01)),
            onLongPress: () => tipSlide.longAdd(math.bignumber(0.01)),
            onPressOut: () => tipSlide.stopLongAdd(),
          }}
        />
        <Text>Number of People</Text>
        <SlideButton
          label={peopleSlide.n.toString()}
          prev={{
            onPress: () => peopleSlide.subtract(math.bignumber(1)),
            onLongPress: () => peopleSlide.longSubtract(math.bignumber(1)),
            onPressOut: () => peopleSlide.stopLongSub(),
          }}
          next={{
            onPress: () => peopleSlide.add(math.bignumber(1)),
            onLongPress: () => peopleSlide.longAdd(math.bignumber(1)),
            onPressOut: () => peopleSlide.stopLongAdd(),
          }}
        />

        <Bill
          payments={[
            {
              title: "Tip Amount",
              value: math
                .format(tipPerPerson, { notation: "fixed", precision: 2 })
                .toString(),
            },
            {
              title: "Total",
              value: math
                .format(totalTip, { notation: "fixed", precision: 2 })
                .toString(),
            },
          ]}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  input: {
    textAlign: "right",
    color: colors.primary,
    fontSize: 24,
    fontFamily: "SpaceMono_700Bold",
  },
  inputContainer: {
    borderWidth: 2,
    borderBottomWidth: 2,
    paddingHorizontal: 8,
    borderColor: colors.primary,
    borderRadius: 8,
  },
});
