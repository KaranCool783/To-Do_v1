import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const AppNavigator = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.area}>
        <View style={styles.topArea}>
          <View style={styles.topBar}>
            <TouchableOpacity>
              <Icon name="bulb" style={styles.topIcon}></Icon>
            </TouchableOpacity>

            <View>
              <Text style={styles.titleText}>Home</Text>
            </View>

            <TouchableOpacity>
              <Icon name="notifications" style={styles.topIcon}></Icon>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainArea}>
          <Text>Main Area</Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarIcon}>
          <Icon name="repeat-outline" style={styles.bottomIcon}></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomBarIcon}>
          <Icon name="add-outline" style={styles.bottomIcon}></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomBarIcon}>
          <Icon name="golf-outline" style={styles.bottomIcon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  area: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 35,
  },

  topArea: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: "100%",
    height: "8%",
  },

  topBar: {
    backgroundColor: "#dfdfdf",
    width: "95%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },

  titleText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },

  topIcon: {
    color: "#1891ed",
    fontSize: 26,
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "ffffff",
    height: 50,
  },

  bottomBarIcon: {
    backgroundColor: "#1891ed",
    height: "70%",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  bottomIcon: {
    color: "white",
    fontSize: 26,
  },
});
