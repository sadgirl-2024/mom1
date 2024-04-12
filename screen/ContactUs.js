import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ContactUs = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:franciakathleen23@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+09685828654');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Follow us on Facebook:{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100063859097731')}
        >
          facebook.com/profile.php?id=100063859097731
        </Text>
      </Text>
      <Text style={styles.text}>
        Email: <Text style={styles.link} onPress={handleEmailPress}>franciakathleen23@gmail.com</Text>
      </Text>
      <Text style={styles.text}>
        Phone: <Text style={styles.link} onPress={handlePhonePress}>09685828654</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ContactUs;
