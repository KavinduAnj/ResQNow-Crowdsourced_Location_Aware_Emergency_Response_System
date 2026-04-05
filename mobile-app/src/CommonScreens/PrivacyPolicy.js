import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./Styles/commonStyles";

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      <View style={styles.textcard}>
        <Text style={styles.textHeader}>1. Information We Collect</Text>
        <Text style={styles.textSubHeader}>Personal Information:</Text>
        <Text style={styles.textContent}>
          Name, email, adress, phone number, and profile photo
        </Text>
      
      </View>
      <View style={styles.textcard}>
        <Text style={styles.textHeader}>1. Information We Collect</Text>
        <Text style={styles.textSubHeader}>Personal Information:</Text>
        <Text style={styles.textContent}>
          Name, email, adress, phone number, and profile photo
        </Text>
      
      </View>
      <View style={styles.textcard}>
        <Text style={styles.textHeader}>1. Information We Collect</Text>
        <Text style={styles.textSubHeader}>Personal Information:</Text>
        <Text style={styles.textContent}>
          Name, email, adress, phone number, and profile photo
        </Text>
      
      </View>
      <View style={styles.textcard}>
        <Text style={styles.textHeader}>1. Information We Collect</Text>
        <Text style={styles.textSubHeader}>Personal Information:</Text>
        <Text style={styles.textContent}>
          Name, email, adress, phone number, and profile photo
        </Text>
      
      </View>

      
    </ScrollView>
  );
};

export default PrivacyPolicy;