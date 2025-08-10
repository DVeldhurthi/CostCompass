import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TrialCard = ({ trialName, imageSource, summary, date }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.trialName}>{trialName}</Text>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.summary}>{summary}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3b82f6', // blue
    borderRadius: 8,
    padding: 12,
    width: '100%',
  },
  trialName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    marginBottom: 6,
  },
  summary: {
    color: 'white',
    fontSize: 14,
    marginBottom: 6,
  },
  date: {
    color: '#d1d5db', // lighter text
    fontSize: 12,
    textAlign: 'right',
  },
});

export default TrialCard;



