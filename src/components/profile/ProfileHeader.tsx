import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { Pencil, Crown } from 'lucide-react-native';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/images/curtain.png')} 
        style={styles.curtainImage}
        resizeMode="stretch"
      />

      {/* Avatar Section */}
      <View style={styles.avatarWrapper}>
        <Image 
          source={require('../../../assets/images/pendant.png')} 
          style={styles.pendantImage}
          resizeMode="contain"
        />
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>Dolapo O.</Text>
          <Pencil size={18} color="#E56B73" style={styles.editIcon} />
        </View>
        <Text style={styles.handle}>@skinqueen</Text>
      </View>

      {/* Skin Score Badge */}
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Crown size={16} color="#E56B73" />
          <Text style={styles.badgeText}>Skin Score <Text style={styles.badgeNumber}>89</Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  curtainImage: {
    position: 'absolute',
    top: -45,
    left: 0,
    right: 0,
    width: '100%',
    height: 600,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 0,
    zIndex: 10,
  },
  pendantImage: {
    width: 200,
    height: 250,
  },
  userInfo: {
    alignItems: 'center',
    marginTop: -40,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 26,
    color: '#4A4A4A',
    fontFamily: 'Playfair_700Bold',
  },
  editIcon: {
    marginLeft: 8,
  },
  handle: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  badgeContainer: {
    marginTop: 20,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFD1DC',
    ...Platform.select({
      ios: {
        shadowColor: '#FFD1DC',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  badgeText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4A4A4A',
    fontFamily: 'Inter_600SemiBold',
  },
  badgeNumber: {
    fontSize: 18,
    fontFamily: 'Playfair_700Bold',
    color: '#4A4A4A',
  },
});
