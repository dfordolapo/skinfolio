import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { 
  UserCircle, 
  Target, 
  History, 
  Bell, 
  Award, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react-native';

const actions = [
  { id: '1', title: 'Edit Profile', subtitle: 'Update your personal information', icon: UserCircle, color: '#E56B73' },
  { id: '2', title: 'Skin Goals', subtitle: 'View and manage your skin goals', icon: Target, color: '#E56B73' },
  { id: '3', title: 'History', subtitle: 'Track your skin journey', icon: History, color: '#E56B73' },
  { id: '4', title: 'Notifications', subtitle: 'Manage your notifications', icon: Bell, color: '#E56B73' },
  { id: '5', title: 'Rewards & Milestones', subtitle: 'View your returns and earnings', icon: Award, color: '#E56B73' },
  { id: '6', title: 'Settings', subtitle: 'App preferences and more', icon: Settings, color: '#E56B73' },
];

export default function ActionList() {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <TouchableOpacity key={action.id} style={styles.actionItem} activeOpacity={0.7}>
          <action.icon size={22} color={action.color} style={{ marginRight: 16 }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{action.title}</Text>
            <Text style={styles.subtitle}>{action.subtitle}</Text>
          </View>
          <ChevronRight size={20} color="#CCC" />
        </TouchableOpacity>
      ))}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
        <LogOut size={20} color="#E56B73" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 4,
    ...Platform.select({
      ios: {
        shadowColor: '#FFD1DC',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    color: '#333',
    marginBottom: 2,
    fontFamily: 'Inter_600SemiBold',
  },
  subtitle: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'Inter_400Regular',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: '#FFD1DC',
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 10,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#E56B73',
    fontFamily: 'Inter_600SemiBold',
  },
});
