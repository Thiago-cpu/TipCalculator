import { Icon } from "@rneui/themed";
import { View, StyleSheet, FlatList } from "react-native";
import { colors } from "../colors";
import Text from "./ui/Text";
import { SpaceMono_700Bold } from "@expo-google-fonts/space-mono";

interface LabelProps {
  title: string;
  value: string | number;
}

function Label({ title, value }: LabelProps) {
  return (
    <View style={styles.labelContainer}>
      <View>
        <Text color="primary">{title}</Text>
        <Text style={{ fontSize: 14 }}>/ person</Text>
      </View>
      <View style={styles.valueContainer}>
        <Icon
          name="attach-money"
          type="material"
          size={36}
          color={colors.secondary}
        />
        <Text style={{ fontSize: 26, color: colors.secondary }}>{value}</Text>
      </View>
    </View>
  );
}

interface BillProps {
  payments: LabelProps[];
}

export default function Bill({ payments }: BillProps) {
  return (
    <View style={styles.billContainer}>
      <FlatList
        data={payments}
        renderItem={({ item }) => (
          <Label title={item.title} value={item.value} />
        )}
        keyExtractor={(item, i) => `${item.title}-${i}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  valueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  billContainer: {
    padding: 36,
    paddingTop: 24,
    backgroundColor: colors.primary,
    borderRadius: 14,
  },
});
