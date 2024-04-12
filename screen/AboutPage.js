import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AboutPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/1a.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Project Manager</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/2a.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Backend</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/3a.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Frontend</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default AboutPage;
