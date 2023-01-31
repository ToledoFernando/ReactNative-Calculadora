import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Button from "./components/buttons";

export default function App() {
  const [cal, setCal] = useState();
  const [result, setResult] = useState();

  const botones = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", ".", 0, "=", "/"];

  const calResult = (op) => {
    setResult(eval(cal));
  };

  const reset = () => {
    setCal();
    setResult();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contenedor2}>
        <Text style={styles.result}>{!result ? 0 : result}</Text>
        <Text style={styles.cal}>{!cal ? 0 : cal}</Text>
      </View>
      <TouchableOpacity style={styles.delete} onPress={() => reset()}>
        <Text style={styles.dt}>CA</Text>
      </TouchableOpacity>
      <View style={styles.botones}>
        {botones.map((b) => (
          <Button key={b} set={setCal} result={calResult} cal={cal} num={b} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "#fff",
    width: 100 + "%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contenedor2: {
    backgroundColor: "#fefefe",
    width: 100 + "%",
    height: 22 + "%",
    display: "flex",
  },
  cal: {
    fontSize: 50,
    height: 40 + "%",
    textAlign: "right",
    minWidth: 100 + "%",
    width: "auto",
  },
  result: {
    color: "#6d6e6e",
    height: 50 + "%",
    fontSize: 60,
    textAlign: "right",
  },
  botones: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 100 + "%",
    height: 70 + "%",
  },
  delete: {
    backgroundColor: "#b63131",
    width: 100 + "%",
    height: 6 + "%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dt: {
    fontSize: 30,
    color: "#fff",
  },
});
