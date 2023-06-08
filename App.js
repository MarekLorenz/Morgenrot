import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { getPersistentState, saveState } from './utilities';

export default function App() {

  const [isAlarmActivated, setAlarmActivated] = useState(getPersistentState());

  const activateAlarm = () => {
    console.log("Alarm activated.")
    setAlarmActivated(true);
    saveState(true);
  }
  
  const deactivateAlarm = () => {
    console.log("Alarm deactivated.")
    setAlarmActivated(false);
    saveState(false);
  }

  const handleClick = () => {
    if (isAlarmActivated) {
      deactivateAlarm();
    } else {
      activateAlarm();
    }
  }

  return (
    <View style={styles.container}>
      <Text onPress={handleClick} style={[isAlarmActivated ? styles.alarmActive : styles.alarmInactive, styles.mainButton]}>morgenrot</Text>
      { isAlarmActivated ?
        <Text style={styles.subtext}>The next alarm is at ...</Text> 
      : null
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtext: {
    fontSize: 18
  },

  mainButton: {
    fontSize: 36,
    fontWeight: 'bold',
  },

  alarmActive: {
    color: '#FF4500',
  },

  alarmInactive: {
    color: '#808080'
  }
});
