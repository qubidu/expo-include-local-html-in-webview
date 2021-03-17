import React from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";
import html from "./myhtml"

export default function App() {
  
  return (
    <View style={styles.container}>
      <WebView
        source={{ html }} 
        style={styles.webview} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    margin: 30,
    backgroundColor:"#eee"
  },
});
