import React from "react";
import { TouchableOpacity, Text } from "react-native";
import style from "./buttons.Style";

function Button({ num, set, cal, result }) {
  const sim = ["+", "-", "*", "/", ".", "="];
  // const sim2 = ["+", "-", "*", "/", "."];

  const verify = (num1, num2) => {
    if (!num1) {
      return set(num2);
    }
    const ultimo = num1[num1.length - 1];
    if (sim.includes(ultimo) && sim.includes(num2)) {
      let cad = num1.slice(0, num1.length - 1);
      let nuevo = cad + num2;
      return set(nuevo);
    }
    return set(`${num1}` + `${num2}`);
  };

  return (
    <TouchableOpacity
      style={style.boton}
      onPress={num == "=" ? () => result(cal) : () => verify(cal, num)}
    >
      <Text style={sim.includes(num) ? style.especial : style.text}>{num}</Text>
    </TouchableOpacity>
  );
}

export default Button;
