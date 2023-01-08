import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from './src/components/modules/SideBar';
import { Theme } from './src/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SideBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.RaisinBlack2,
  },
});
