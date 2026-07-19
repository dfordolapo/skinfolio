import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeInUp, SlideInRight } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import OnboardingLayout from '../../components/ui/OnboardingLayout';

export default function OnboardingStep1() {
  const router = useRouter();

  return (
    <OnboardingLayout backgroundColor="#FFC0D4">
      <View style={styles.container}>
        <Animated.Image 
          source={require('../../../assets/images/onboarding/step1.png')} 
          style={styles.image}
          resizeMode="contain"
          entering={SlideInRight.springify()}
        />
        <View style={styles.textContainer}>
          <Animated.Text 
            style={styles.title}
            entering={FadeInDown.delay(300).springify()}
          >
            Treat your skin like the asset it is
          </Animated.Text>
          <Animated.Text 
            style={styles.subtitle}
            entering={FadeInDown.delay(400).springify()}
          >
            Manage your routine and watch its value grow
          </Animated.Text>
        </View>
        <Animated.View style={{ width: '100%' }} entering={FadeInUp.delay(600).springify()}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/onboarding/step-2')}>
            <Animated.Text style={styles.buttonText}>Next</Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    flex: 1,
    maxHeight: 400,
    marginTop: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Playfair_700Bold',
    fontSize: 24,
    color: '#6E444B',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#6E444B',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#EE6F76',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#EE6F76',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
  }
});
