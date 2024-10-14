import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import AddTask from "./screens/AddTask";
import RepeatScreen from "./screens/RepeatScreen";
import GoalsScreen from "./screens/GoalsScreen";
import NotificationScreen from "./screens/NotificationScreen";
import AddDiffTaskView from "./components/navigation/AddDiffTaskView";

const AppNavigator = () => {
  const [selectedScreen, setSelectedScreen] = useState("Home");
  const [isTaskModelShow, setIsTaskModelShow] = useState(false);

  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      title: "Daily Excercise ksdhk skdhf kjshfd khks dskhf kjfdh ",
      status: "Pending",
      repeat: ["Daily"],
      subTask: true,
      attempts: 3,
      isGoal: false,
    },
    {
      id: 2,
      title: "Task no. 2",
      status: "Completed",
      repeat: ["weekly"],
      subTask: false,
      attempts: 1,
      isGoal: false,
    },
    {
      id: 3,
      title: "Task no. 2",
      status: "Postponed",
      repeat: ["weekly"],
      subTask: false,
      attempts: 1,
      isGoal: false,
    },
    {
      id: 4,
      title: "Task no. 2",
      status: "Late",
      repeat: ["weekly"],
      subTask: false,
      attempts: 1,
      isGoal: false,
    },
    {
      id: 5,
      title: "Task no. 2",
      status: "Pending",
      repeat: ["weekly"],
      subTask: false,
      attempts: 1,
      isGoal: false,
    },
    {
      id: 6,
      title: "Task no. 2",
      status: "Canceled",
      repeat: ["weekly"],
      subTask: false,
      attempts: 1,
      isGoal: false,
    },
    {
      id: 7,
      title: "Task no. 2",
      status: "Pending",
      repeat: ["weekly"],
      subTask: false,
      attempts: 1,
      isGoal: false,
    },
  ]);
  const [repeatTaskInfo, setRepeatTaskInfo] = useState([
    {
      id: 1,
      dueDate: "14-Oct-2024",
      dueTime: "12:00 PM",
    },
    {
      id: 2,
      dueDate: "14-Oct-2024",
      dueTime: "12:00 PM",
    },
  ]);
  const [subTasks, setSubTasks] = useState([
    {
      id: 1,
      tasks: [
        {
          subTaskId: 1,
          title: "Push-Ups",
          status: "Pending",
        },
        {
          subTaskId: 2,
          title: "Warm-Ups",
          status: "Pending",
        },
        {
          subTaskId: 3,
          title: "Pull-Ups",
          status: "Pending",
        },
      ],
    },
  ]);

  const renderScreen = () => {
    switch (selectedScreen) {
      case "Home":
        return (
          <HomeScreen
            tasksList={tasksList}
            repeatTaskInfo={repeatTaskInfo}
            subTasks={subTasks}
          />
        );

      case "Add Task":
        return <AddTask />;

      case "Repeating Tasks":
        return <RepeatScreen />;

      case "Goals":
        return <GoalsScreen />;

      case "Notifications":
        return <NotificationScreen />;

      default:
        setSelectedScreen("Home");
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.area}>
        <View style={styles.topArea}>
          <View style={styles.topBar}>
            {selectedScreen === "Home" ? (
              <TouchableOpacity onPress={() => setIsTaskModelShow(true)}>
                <Icon name="bulb" style={styles.topIcon}></Icon>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setSelectedScreen("Home")}>
                <Icon name="caret-back" style={styles.topIcon}></Icon>
              </TouchableOpacity>
            )}

            <View>
              <Text style={styles.titleText}>{selectedScreen}</Text>
            </View>

            {selectedScreen === "Home" ? (
              <TouchableOpacity
                onPress={() => setSelectedScreen("Notifications")}
              >
                <Icon name="notifications" style={styles.topIcon}></Icon>
              </TouchableOpacity>
            ) : (
              <View style={styles.blankIcon}></View>
            )}
          </View>
        </View>

        <View style={styles.mainArea}>{renderScreen()}</View>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarIcon}
          onPress={() => setSelectedScreen("Repeating Tasks")}
        >
          <Icon name="repeat-outline" style={styles.bottomIcon}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarIcon}
          onPress={() => setSelectedScreen("Add Task")}
        >
          <Icon name="add-outline" style={styles.bottomIcon}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarIcon}
          onPress={() => setSelectedScreen("Goals")}
        >
          <Icon name="golf-outline" style={styles.bottomIcon}></Icon>
        </TouchableOpacity>
      </View>

      {
        <Modal
          transparent={true}
          visible={isTaskModelShow}
          animationType="fade"
          onRequestClose={() => setIsTaskModelShow(false)}
        >
          <AddDiffTaskView setIsTaskModelShow={setIsTaskModelShow} />
        </Modal>
      }
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

  mainArea: {
    width: "100%",
    flex: 1,
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

  blankIcon: {
    width: 28,
    height: 28,
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
    elevation: 5,
  },

  bottomIcon: {
    color: "white",
    fontSize: 26,
  },
});
