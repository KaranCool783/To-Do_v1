import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const AddDiffTaskView = ({ setIsTaskModelShow }) => {
  const taskTypes = [
    "Recurring Task",
    "Simple Task",
    "Tasks within Tasks",
    "Set Goals",
  ];
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setIsTaskModelShow(false)}>
        <View style={styles.aboveContentArea}></View>
      </TouchableWithoutFeedback>

      <View style={styles.contentArea}>
        <View style={styles.content}>
          <Text style={styles.headingText}>New Tasks and Goals</Text>

          {taskTypes.map((task, index) => (
            <TouchableOpacity key={index} style={styles.addTaskList}>
              <Text style={styles.taskTypeText}>{task}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableWithoutFeedback onPress={() => setIsTaskModelShow(false)}>
        <View style={styles.belowContentArea}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AddDiffTaskView;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  aboveContentArea: {
    height: "9%",
    width: "100%",
    backgroundColor: "yellow",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  contentArea: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },

  content: {
    width: "95%",
    backgroundColor: "#37a0f0",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },

  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },

  addTaskList: {
    backgroundColor: "#e0f7fa",
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    marginHorizontal: 10,
  },

  taskTypeText: {
    fontSize: 16,
  },

  belowContentArea: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});
