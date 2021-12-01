import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from 'axios';

export default function App() {

  const [data1, setData1] = useState(null);

  axios({
    url: 'https://0fnv5mc41e.execute-api.us-west-2.amazonaws.com/production/v4/games',
    method: 'POST',
    //withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Client-ID': 't38tq99mdzsvr5d8h4t5lywoeqpehi',
        'Authorization' : 'Bearer 2ao3gnd6319nczhf8g97nm5l7wgusp',
    },
    data: "fields name; limit 50; sort name;"
  })
    .then(response => {
        console.log(response.data);
        setData1(JSON.stringify(response.data));
    })
    .catch(err => {
        console.error(err);
    });

  return (
    <View style={styles.container}>
      <Text>{data1}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
