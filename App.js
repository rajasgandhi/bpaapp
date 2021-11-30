import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Apicalypse } from "apicalypse";

const rawQueryString = "fields a,b,c;limit 50;offset 0;";

async function retrieveResults() {
  // async/await
  /*try {
    const response = await apicalypse(rawQueryString).request(
      "https://api.igdb.com/v4/games"
    );

    // This is an axios response: https://github.com/axios/axios#response-schema
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }*/

  const options = {
    method: 'post',
    headers: {
      'Client-ID': 't38tq99mdzsvr5d8h4t5lywoeqpehi',
      'Authorization': '5zcqb60p9t920n3fju93ro8wncocdh'
    },
    responseType: 'json'
  }

  // Promises
  const response = await Apicalypse(options)
    .request("https://api.igdb.com/v4/games")
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default function App() {
  retrieveResults();

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
