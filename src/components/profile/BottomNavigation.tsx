import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Home, Activity, Droplets, User } from 'lucide-react-native';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Home size={24} color="#BDBDBD" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Activity size={24} color="#BDBDBD" />
          <Text style={styles.navText}>Portfolio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Droplets size={24} color="#BDBDBD" />
          <Text style={styles.navText}>Routine</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <User size={24} color="#E56B73" />
          <Text style={[styles.navText, styles.activeText]}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    paddingVertical: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFD1DC',
    ...Platform.select({
      ios: {
        shadowColor: '#FFD1DC',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 10,
    marginTop: 4,
    color: '#BDBDBD',
    fontWeight: '500',
  },
  activeText: {
    color: '#E56B73',
  },
});
