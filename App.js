import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from 'axios';

export default function App() {

  axios({
    url: 'https://0fnv5mc41e.execute-api.us-west-2.amazonaws.com/production/v4/age_ratings',
    method: 'GET',
    //withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Client-ID': 't38tq99mdzsvr5d8h4t5lywoeqpehi',
        'Authorization' : 'Bearer 2ao3gnd6319nczhf8g97nm5l7wgusp',
    },
    data: "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;"
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
