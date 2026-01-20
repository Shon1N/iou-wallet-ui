import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import stateService from "../../services/state-service";

export default function HomePage() {
  const username: string = stateService.auth?.username || "";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <View style={styles.iconContainer}>
            <Ionicons name="flame" size={24} color="orange" />
            <Text style={styles.iconText}>5 </Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="rocket" size={24} color="#05BFDB" />
            <Text style={styles.iconText}>1100 </Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Hello, {username}</Text>
            <Text style={styles.cardText}>
              {"See what's happening in your wallet!"}
            </Text>
          </TouchableOpacity>

          <View style={styles.card}>{/* <PaceCalculator /> */}</View>

          {/* Apply for a loan button */}
          <TouchableOpacity style={styles.card}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A4D68",
  },
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 20,
  },
  header: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#088395",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },
  content: {
    padding: 20,
    width: "100%",
    marginTop: 60,
    flexGrow: 1,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: "#ccd6db",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#666",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#088395",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
