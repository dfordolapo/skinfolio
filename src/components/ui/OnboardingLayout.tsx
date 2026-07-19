import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  showBack?: boolean;
  showSkip?: boolean;
  onSkip?: () => void;
  onBack?: () => void;
  backgroundColor?: string;
}

export default function OnboardingLayout({
  children,
  showBack = true,
  showSkip = true,
  onSkip,
  onBack,
  backgroundColor = '#FFDDE4'
}: OnboardingLayoutProps) {
  const router = useRouter();

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      router.push('/onboarding/register');
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={[styles.header, Platform.OS === 'android' && { marginTop: StatusBar.currentHeight }]}>
        {showBack ? (
          <TouchableOpacity onPress={handleBack} style={styles.iconButton}>
            <ArrowLeft size={24} color="#6E444B" />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconButton} />
        )}

        {showSkip ? (
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.skipButton} />
        )}
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 60,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  skipButton: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  skipText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#6E444B',
  },
  content: {
    flex: 1,
  }
});
