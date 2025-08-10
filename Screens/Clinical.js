import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import TrialCard from './TrailCard';

export default function ClinicalTrialsScreen({navigation, route}) {
  const screenWidth = Dimensions.get("window").width;
  const tileSize = (screenWidth - 60) / 2;

  const [trials, setTrials] = useState([
    {
      id: "1",
      trialName: "Trial A",
      imageSource: require("../assets/adaptive-icon.png"),
      summary: "Exploring the effects of treatment A.",
      date: "Jan 15, 2025",
    },
    {
      id: "2",
      trialName: "Trial B",
      imageSource: require("../assets/favicon.png"),
      summary: "Testing the safety of compound B.",
      date: "Feb 03, 2025",
    },
    {
      id: "3",
      trialName: "Trial C",
      imageSource: require("../assets/icon.png"),
      summary: "Evaluating new cancer therapy C.",
      date: "Mar 12, 2025",
    },
    {
      id: "4",
      trialName: "Trial D",
      imageSource: require("../assets/splash-icon.png"),
      summary: "Investigating vaccine D for prevention.",
      date: "Apr 22, 2025",
    },
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText} onPress={() => {navigation.goBack()}}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Clinical Trials</Text>
      <FlatList
        data={trials}
        renderItem={({ item }) => (
          <View style={{ width: tileSize, margin: 5 }}>
            <TrialCard
              trialName={item.trialName}
              imageSource={item.imageSource}
              summary={item.summary}
              date={item.date}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    backgroundColor: "#87CEFA",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  listContent: {
    paddingBottom: 20,
  },
});

