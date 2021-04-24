import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";

const CustomDate = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    props.changeHandler(date);
    hideDatePicker();
  };

  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputName}>{props.title}</Text>
        <Text onPress={showDatePicker} style={styles.input}>
          {date.toLocaleString()}
        </Text>
      </View>
      <DateTimePickerModal
        date={date}
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    marginVertical: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  inputName: {
    paddingLeft: 5,
    fontFamily: "Montserrat_400Regular",
  },
});

export default CustomDate;
