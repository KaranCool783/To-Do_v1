import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ tasksList, repeatTaskInfo, subTasks }) => {
  //function to render tasks
  const renderTaskItem = ({ item }) => {
    const repeatInfo = repeatTaskInfo.find((info) => info.id === item.id);
    return (
      <View
        style={[
          styles.taskContainer,
          {
            backgroundColor:
              item.status === "Completed"
                ? "#dbffd6"
                : item.status === "Postponed"
                ? "#e6e6e6"
                : item.status === "Canceled" || item.status === "Late"
                ? "#ffa6a6"
                : "#ffedd6",
          },
          {
            borderColor:
              item.status === "Completed"
                ? "#35ff19"
                : item.status === "Postponed"
                ? "#bdbdbd"
                : item.status === "Canceled" || item.status === "Late"
                ? "#ff1919"
                : "#ff9a19",
          },
        ]}
      >
        <Text style={styles.taskTitle}>{item.title}</Text>

        {repeatInfo && (
          <Text>
            Due: {repeatInfo.dueDate} at {repeatInfo.dueTime}
          </Text>
        )}

        {item.subTask && renderSubTasks(item.id)}
        <View
          style={[
            styles.status,
            {
              backgroundColor:
                item.status === "Completed"
                  ? "#dbffd6"
                  : item.status === "Postponed"
                  ? "#e6e6e6"
                  : item.status === "Canceled" || item.status === "Late"
                  ? "#ffa6a6"
                  : "#ffedd6",
            },
            {
              borderColor:
                item.status === "Completed"
                  ? "#35ff19"
                  : item.status === "Postponed"
                  ? "#bdbdbd"
                  : item.status === "Canceled" || item.status === "Late"
                  ? "#ff1919"
                  : "#ff9a19",
            },
          ]}
        >
          <Icon
            name={
              item.status === "Completed"
                ? "checkmark-circle"
                : item.status === "Postponed"
                ? "arrow-redo-circle"
                : item.status === "Canceled"
                ? "ban"
                : "time"
            }
            style={[
              {
                color:
                  item.status === "Completed"
                    ? "#35ff19"
                    : item.status === "Postponed"
                    ? "#bdbdbd"
                    : item.status === "Canceled" || item.status === "Late"
                    ? "#ff1919"
                    : "#ff9a19",
              },
            ]}
            size={15}
          ></Icon>
          <Text> {item.status}</Text>
        </View>
        {/* <Text>Attempts: {item.attempts}</Text>
        <Text>Repeat: {item.repeat.join(", ")}</Text> */}
      </View>
    );
  };

  // Function to render the subTasks
  const renderSubTasks = (taskId) => {
    const subTaskGroup = subTasks.find((subTask) => subTask.id === taskId);
    if (!subTaskGroup) return null;

    return (
      <View style={styles.subTaskContainer}>
        {subTaskGroup.tasks.map((subTask) => (
          <Text key={subTask.subTaskId} style={styles.subTaskText}>
            {subTask.title} - {subTask.status}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Todays Tasks</Text>
      <FlatList
        data={tasksList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 12,
  },

  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  taskContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    shadowOpacity: 0.1,
    elevation: 3,
    width: "95%",
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  status: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    top: -10,
    left: 15,
  },

  subTaskContainer: {
    marginTop: 8,
  },

  subTaskText: {
    fontSize: 14,
    color: "#666",
  },
});
