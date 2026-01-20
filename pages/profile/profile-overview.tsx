import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import stateService from "../../services/state-service";

export default function ProfilePage() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const settingsIconRef = useRef<View>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const publicName: string = stateService.auth?.publiName || "";
  const username: string = stateService.auth?.username || "";

  const handleSettingsPress = () => {
    if (settingsIconRef.current) {
      settingsIconRef.current.measure((fx, fy, w, h, px, py) => {
        setMenuPosition({ x: px - 110, y: py }); // Adjust these values as needed
        setIsMenuVisible(!isMenuVisible);
      });
    } else {
      setIsMenuVisible(!isMenuVisible); // Fallback if ref is not available immediately
    }
  };

  const handleLogoutPress = () => {
    stateService.clearAuth();
    setIsMenuVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <View
          style={styles.modalOverlay}
          onTouchEnd={() => setIsMenuVisible(false)}
        >
          <View
            style={{
              position: "absolute",
              top: menuPosition.y,
              left: menuPosition.x,
            }}
          >
            <View style={styles.menu}>
              <Pressable
                onPress={() => {
                  setIsMenuVisible(false);
                  handleLogoutPress();
                }}
              >
                <Text style={styles.menuItem}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        {/* Settings Icon */}
        <TouchableOpacity
          ref={settingsIconRef}
          style={styles.settingsIcon}
          onPress={() => handleSettingsPress()}
        >
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
          />
        </View>
        <Text style={styles.headerText}>{publicName}</Text>
        <Text style={styles.subHeaderText}>@{username} </Text>
        <Text style={styles.subHeaderText}>On IOU Wallet since 2024 </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.friendTagCardContainer}>
          <View style={styles.friendTagCard}>
            <TouchableOpacity
              onPress={() => console.log("Friends Pressed")}
              style={styles.friendTagButton}
            >
              <Text style={styles.friendTagText}>5 </Text>
              <Text style={styles.friendTagText}>Lent </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.friendTagCard}>
            <TouchableOpacity
              onPress={() => console.log("Leagues Pressed")}
              style={styles.friendTagButton}
            >
              <Text style={styles.friendTagText}>1 </Text>
              <Text style={styles.friendTagText}>Borrowed </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.pageSection}>
          <Text style={styles.pageSectionText}>Some section </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A4D68",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  settingsIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
  content: {
    padding: 20,
  },
  friendTagCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 20,
  },
  friendTagCard: {
    borderRadius: 10,
    borderRightColor: "#fff",
    borderRightWidth: 1,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  friendTagText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  friendTagButton: {
    alignItems: "center",
  },
  addFriendButton: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 0,
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
  pageSection: {
    marginBottom: 20,
  },
  pageSectionText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  menu: {
    backgroundColor: "#0A4D68",
    borderRadius: 10,
    padding: 10,
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 5,
  },
  menuItem: {
    padding: 10,
    fontSize: 16,
    color: "#fff",
  },
});
