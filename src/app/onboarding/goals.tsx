import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { FadeInLeft, FadeInUp, ZoomIn } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { CheckCircle2, Droplet, Hourglass, Sun, Shield, Smile } from 'lucide-react-native';
import OnboardingLayout from '../../components/ui/OnboardingLayout';

const GOALS = [
  { id: 'clear', label: 'Clear skin', icon: Smile },
  { id: 'hydration', label: 'Hydration', icon: Droplet },
  { id: 'aging', label: 'Anti-aging', icon: Hourglass },
  { id: 'bright', label: 'Brightening', icon: Sun },
  { id: 'maintain', label: 'Maintenance & prevention', icon: Shield },
];

export default function OnboardingGoals() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState('clear');

  return (
    <OnboardingLayout backgroundColor="#FFC0D4">
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <Animated.Image 
            source={require('../../../assets/images/onboarding/goals.png')} 
            style={styles.image}
            resizeMode="contain"
            entering={ZoomIn.duration(800)}
          />
          <Animated.Text 
            style={styles.title}
            entering={FadeInUp.delay(300).springify()}
          >
            What's your goal?
          </Animated.Text>
          
          <View style={styles.optionsContainer}>
            {GOALS.map((goal, index) => {
              const isSelected = selectedGoal === goal.id;
              const Icon = goal.icon;
              return (
                <Animated.View key={goal.id} entering={FadeInLeft.delay(300 + index * 100).springify()}>
                  <TouchableOpacity 
                    style={[styles.optionCard, isSelected && styles.optionCardSelected]}
                    onPress={() => setSelectedGoal(goal.id)}
                  >
                    <View style={styles.optionLeft}>
                      <Icon size={20} color={isSelected ? '#6E444B' : '#8A6A6F'} />
                      <Animated.Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                        {goal.label}
                      </Animated.Text>
                    </View>
                    {isSelected && <CheckCircle2 size={24} color="#EE6F76" />}
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </View>
        </View>

        <Animated.View style={{ width: '100%' }} entering={FadeInUp.delay(900).springify()}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/onboarding/register')}
          >
            <Animated.Text style={styles.buttonText}>Get started</Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 220,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Playfair_700Bold',
    fontSize: 24,
    color: '#6E444B',
    textAlign: 'center',
    marginBottom: 15,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  optionCardSelected: {
    backgroundColor: 'rgba(238, 111, 118, 0.2)',
    borderColor: '#EE6F76',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#8A6A6F',
    marginLeft: 15,
  },
  optionTextSelected: {
    color: '#6E444B',
    fontFamily: 'Inter_600SemiBold',
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
