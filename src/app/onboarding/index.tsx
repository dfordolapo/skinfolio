import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { BounceIn, FadeInUp } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import OnboardingLayout from '../../components/ui/OnboardingLayout';

export default function OnboardingSplash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboarding/step-1');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <OnboardingLayout showBack={false} showSkip={false} backgroundColor="#FFDDE4">
      <TouchableWithoutFeedback onPress={() => router.push('/onboarding/step-1')}>
        <View style={styles.container}>
          <Animated.Image 
            source={require('../../../assets/images/onboarding/splash.png')} 
            style={styles.image}
            resizeMode="contain"
            entering={BounceIn.duration(1000)}
          />
          <Animated.Text 
            style={styles.title}
            entering={FadeInUp.delay(500).springify()}
          >
            Skin-folio
          </Animated.Text>
        </View>
      </TouchableWithoutFeedback>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 650,
    marginTop: -100,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Playfair_700Bold',
    fontSize: 32,
    color: '#6E444B',
  }
});
