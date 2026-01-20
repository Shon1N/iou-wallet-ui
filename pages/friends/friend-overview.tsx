import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function FriendOverview() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* <Text style={styles.headerText}></Text>
        <Text style={styles.subHeaderText}></Text>
        <Text style={styles.subHeaderText}></Text> */}
      </View>

      <View style={styles.buttonCard}>
        <TouchableOpacity
          onPress={() => console.log("Add friends Pressed")}
          style={styles.addFriendButton}
        >
          <Ionicons name="person-add-outline" size={24} color="#fff" />
          <Text style={styles.friendTagText}>Add Beneficiary </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A4D68",
  },
  buttonCard: {
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 15,
    shadowColor: "#000",
    width: "45%",
    marginLeft: 20,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 0,
  },
  friendTagText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  addFriendButton: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#088395",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative", // Ensures the settings icon can be positioned absolutely
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },
});
