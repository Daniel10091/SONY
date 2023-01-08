import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Navigation from './Navigation';

import AppConfig from '../../../../config/app.config';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function SideBar () {
  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
        <Text style={styles.logoText}>{AppConfig.appName}</Text>
      </View>

      <View style={styles.navigationContainer}>
        <Navigation/>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={styles.closeAppButton} 
          onPress={() => null} // Navigation.pop()
          activeOpacity={0.6}
        >
          <Ionicons style={styles.closeAppButtonIcon} name="ios-power" />
        </TouchableOpacity>
      </View>

    </View>
  );
}