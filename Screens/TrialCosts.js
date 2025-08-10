import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from "react-native";

const clinicsMock = [
  {
    id: "c1",
    name: "Northside Oncology Clinic",
    latitude: 37.785834,
    longitude: -122.406417,
    address: "123 N Main St",
    treatments: [
      { name: "Chemotherapy (per cycle)", cost: 4200 },
      { name: "Genetic Testing", cost: 450 },
    ],
  },
  {
    id: "c2",
    name: "Downtown Health Center",
    latitude: 37.776,
    longitude: -122.42,
    address: "700 Market Ave",
    treatments: [
      { name: "Radiation Therapy (per session)", cost: 1200 },
      { name: "Surgical Consultation", cost: 150 },
    ],
  },
  {
    id: "c3",
    name: "Community Clinic",
    latitude: 37.79,
    longitude: -122.4,
    address: "45 Elm St",
    treatments: [
      { name: "Immunotherapy (per infusion)", cost: 3200 },
      { name: "Follow-up Visit", cost: 90 },
    ],
  },
];

export default function ClinicalCostsStaticMap({navigation, route}) {
  const [selectedClinic, setSelectedClinic] = useState(null);

  const centerLat = selectedClinic?.latitude || 37.78;
  const centerLng = selectedClinic?.longitude || -122.41;

  const markerParams = clinicsMock
    .map((c) => `markers=color:red|${c.latitude},${c.longitude}`)
    .join("&");

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${centerLat},${centerLng}&zoom=13&size=600x300&maptype=roadmap&${markerParams}&key=YOUR_GOOGLE_MAPS_API_KEY`;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText} onPress={() => {navigation.goBack()}}>Back</Text>
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <Image source={{ uri: mapUrl }} style={styles.mapImage} />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.headerTitle}>Clinical Treatments & Costs</Text>
        <FlatList
          data={clinicsMock}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.card,
                selectedClinic?.id === item.id && { borderColor: "#007AFF", borderWidth: 2 },
              ]}
              onPress={() => setSelectedClinic(item)}
            >
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.address}</Text>
              {item.treatments.map((t, i) => (
                <Text key={i} style={styles.treatmentText}>
                  {t.name} — ${t.cost.toLocaleString()}
                </Text>
              ))}
            </TouchableOpacity>
          )}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mapContainer: { height: Dimensions.get("window").height * 0.55 },
  mapImage: { width: "100%", height: "100%" },
  listContainer: { flex: 1, paddingTop: 12 },
  headerTitle: { fontSize: 20, fontWeight: "bold", paddingHorizontal: 16, marginBottom: 8 },
  card: {
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: { fontSize: 16, fontWeight: "600" },
  cardSubtitle: { fontSize: 13, color: "#444", marginBottom: 6 },
  treatmentText: { fontSize: 13, marginTop: 4 },
  backButton: {
    backgroundColor: "#87CEFA",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 40,
    marginLeft: 20
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});



