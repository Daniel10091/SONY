import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import AppNavigation from './config/navigation.config';

import styles from './styles';
import { Theme } from '../../../../constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const NavigationStyles = Theme.Sizes.SideBar.Navigation;

export default function Navigation () {

  const [ selected, setSelected ] = React.useState('Movies');

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          // setSelected('Home');
        }} 
        activeOpacity={0.6}
      >
        <Ionicons style={[styles.icon, {
          fontSize: selected === 'Home' ? NavigationStyles.Item.IconActive : NavigationStyles.Item.Icon1,
          opacity: selected === 'Home' ? 1 : 0.2,
        }]} name="ios-home-outline" />
        <Text style={[styles.label, {
          fontSize: selected === 'Home' ? NavigationStyles.Item.LabelActive : NavigationStyles.Item.Label1,
          opacity: selected === 'Home' ? 1 : 0.2,
        }]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          // setSelected('TV');
        }} 
        activeOpacity={0.6}
      >
        <Ionicons style={[styles.icon, {
          fontSize: selected === 'TV' ? NavigationStyles.Item.IconActive : NavigationStyles.Item.Icon2,
          opacity: selected === 'TV' ? 1 : 0.4,
        }]} name="ios-tv-outline" />
        <Text style={[styles.label, {
          fontSize: selected === 'TV' ? NavigationStyles.Item.LabelActive : NavigationStyles.Item.Label2,
          opacity: selected === 'TV' ? 1 : 0.4,
        }]}>TV</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          // setSelected('Music');
        }} 
        activeOpacity={0.6}
      >
        <Ionicons style={[styles.icon, {
          fontSize: selected === 'Music' ? NavigationStyles.Item.IconActive : NavigationStyles.Item.Icon3,
          opacity: selected === 'Music' ? 1 : 0.6,
        }]} name="ios-headset-outline" />
        <Text style={[styles.label, {
          fontSize: selected === 'Music' ? NavigationStyles.Item.LabelActive : NavigationStyles.Item.Label3,
          opacity: selected === 'Music' ? 1 : 0.6,
        }]}>Music</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          // setSelected('Movies');
        }} 
        activeOpacity={0.6}
      >
        <Ionicons style={[styles.icon, {
          fontSize: selected === 'Movies' ? NavigationStyles.Item.IconActive : NavigationStyles.Item.Icon1,
          opacity: selected === 'Movies' ? 1 : 0.2,
        }]} name="ios-film-outline" />
        <Text style={[styles.label, {
          fontSize: selected === 'Movies' ? NavigationStyles.Item.LabelActive : NavigationStyles.Item.Label1,
          opacity: selected === 'Movies' ? 1 : 0.2,
        }]}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          // setSelected('Apps');
        }} 
        activeOpacity={0.6}
      >
        <Ionicons style={[styles.icon, {
          fontSize: selected === 'Apps' ? NavigationStyles.Item.IconActive : NavigationStyles.Item.Icon3,
          opacity: selected === 'Apps' ? 1 : 0.6,
        }]} name="ios-apps-outline" />
        <Text style={[styles.label, {
          fontSize: selected === 'Apps' ? NavigationStyles.Item.LabelActive : NavigationStyles.Item.Label3,
          opacity: selected === 'Apps' ? 1 : 0.6,
        }]}>Apps</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          // setSelected('Settings');
        }} 
        activeOpacity={0.6}
      >
        <Ionicons style={[styles.icon, {
          fontSize: selected === 'Settings' ? NavigationStyles.Item.IconActive : NavigationStyles.Item.Icon2,
          opacity: selected === 'Settings' ? 1 : 0.4,
        }]} name="ios-settings-outline" />
        <Text style={[styles.label, {
          fontSize: selected === 'Settings' ? NavigationStyles.Item.LabelActive : NavigationStyles.Item.Label2,
          opacity: selected === 'Settings' ? 1 : 0.4,
        }]}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => {
          // setSelected('Help');
        }} 
        activeOpacity={0.6}
      >
        <Ionicons style={[styles.icon, {
          fontSize: selected === 'Help' ? NavigationStyles.Item.IconActive : NavigationStyles.Item.Icon1,
          opacity: selected === 'Help' ? 1 : 0.2,
        }]} name="ios-help-outline" />
        <Text style={[styles.label, {
          fontSize: selected === 'Help' ? NavigationStyles.Item.LabelActive : NavigationStyles.Item.Label1,
          opacity: selected === 'Help' ? 1 : 0.2,
        }]}>Help</Text>
      </TouchableOpacity>
    </View>
  );
}