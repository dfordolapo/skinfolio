import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import ActionList from '../components/profile/ActionList';
import BottomNavigation from '../components/profile/BottomNavigation';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <ActionList />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5', // Soft pink background
  },
  scrollContent: {
    paddingBottom: 100, // Space for bottom nav
  },
});
