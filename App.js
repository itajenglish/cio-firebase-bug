import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Gleap from 'react-native-gleapsdk';

// * Gleap Setup
Gleap.initialize('example-token');

// * Gleap Push Notifications Setup
Gleap.registerListener('registerPushMessageGroup', (topic) => messaging().subscribeToTopic(topic).then(() => console.log('Subscribed to topic', topic)).catch((error) => console.error('Error subscribing to topic', error)));
Gleap.registerListener('unregisterPushMessageGroup', (topic) => messaging().unsubscribeFromTopic(topic).then(() => console.log('Unsubscribed from topic', topic)).catch((error) => console.error('Error unsubscribing from topic', error)));

function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Test</Text>
    </SafeAreaView>
  );
}

export default App;
