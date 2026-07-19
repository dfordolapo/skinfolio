import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Activity, Droplets, User } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('Me');

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.navItem, styles.curveOuter, activeTab === 'Home' && styles.activeItem]}
        onPress={() => setActiveTab('Home')}
      >
        <Ionicons 
          name={activeTab === 'Home' ? "home" : "home-outline"} 
          size={activeTab === 'Home' ? 26 : 24} 
          color={activeTab === 'Home' ? '#FFF' : '#A0A0A0'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.navItem, styles.curveInner, activeTab === 'Portfolio' && styles.activeItem]}
        onPress={() => setActiveTab('Portfolio')}
      >
        <Activity size={activeTab === 'Portfolio' ? 28 : 24} color={activeTab === 'Portfolio' ? '#FFF' : '#A0A0A0'} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.navItem, styles.curveInner, activeTab === 'Routine' && styles.activeItem]}
        onPress={() => setActiveTab('Routine')}
      >
        <Droplets size={activeTab === 'Routine' ? 28 : 24} color={activeTab === 'Routine' ? '#FFF' : '#A0A0A0'} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.navItem, styles.curveOuter, activeTab === 'Me' && styles.activeItem]}
        onPress={() => setActiveTab('Me')}
      >
        <User size={activeTab === 'Me' ? 28 : 24} color={activeTab === 'Me' ? '#FFF' : '#A0A0A0'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  curveOuter: {
    transform: [{ translateY: -15 }],
  },
  curveInner: {
    transform: [{ translateY: 5 }],
  },
  navItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  activeItem: {
    backgroundColor: '#EE6F76',
    width: 62,
    height: 62,
    borderRadius: 31,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
        shadowColor: '#000',
      },
    }),
  },
});
