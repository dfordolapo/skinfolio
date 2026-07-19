import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { Mail, User, Eye, EyeOff, Lock, CheckCircle } from 'lucide-react-native';
import OnboardingLayout from '../../components/ui/OnboardingLayout';

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

export default function OnboardingRegister() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    router.replace('/profile');
  };

  return (
    <OnboardingLayout showSkip={false} backgroundColor="#FFC0D4">
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <AnimatedImageBackground 
          source={require('../../../assets/images/onboarding/register.png')} 
          style={styles.container}
          imageStyle={{ resizeMode: 'contain' }}
          entering={FadeIn.duration(1000)}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <Animated.View style={styles.formContainer} entering={FadeInUp.duration(800).delay(200)}>
              <Text style={styles.title}>Create your Skin-folio</Text>
              
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Name</Text>
                <View style={styles.inputWrapper}>
                  <User size={18} color="#8A6A6F" style={styles.icon} />
                  <Text style={styles.divider}>|</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Jane Doe"
                    placeholderTextColor="#B09A9E"
                  />
                </View>
                <View style={styles.inputUnderline} />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputWrapper}>
                  <Mail size={18} color="#8A6A6F" style={styles.icon} />
                  <Text style={styles.divider}>|</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="demo@email.com"
                    placeholderTextColor="#B09A9E"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.inputUnderline} />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                  <Lock size={18} color="#8A6A6F" style={styles.icon} />
                  <Text style={styles.divider}>|</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="enter your password"
                    placeholderTextColor="#B09A9E"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye size={18} color="#8A6A6F" /> : <EyeOff size={18} color="#8A6A6F" />}
                  </TouchableOpacity>
                </View>
                <View style={styles.inputUnderline} />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputWrapper}>
                  <CheckCircle size={18} color="#8A6A6F" style={styles.icon} />
                  <Text style={styles.divider}>|</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="confirm your password"
                    placeholderTextColor="#B09A9E"
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <Eye size={18} color="#8A6A6F" /> : <EyeOff size={18} color="#8A6A6F" />}
                  </TouchableOpacity>
                </View>
                <View style={styles.inputUnderline} />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Create account</Text>
              </TouchableOpacity>

              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have a Skin-folio? </Text>
                <TouchableOpacity onPress={handleRegister}>
                  <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </ScrollView>
        </AnimatedImageBackground>
      </KeyboardAvoidingView>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 45,
  },
  formContainer: {
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'Playfair_700Bold',
    fontSize: 22,
    color: '#6E444B',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 14,
    width: '65%',
    alignSelf: 'center',
  },
  label: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#6E444B',
    marginBottom: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
  },
  icon: {
    marginRight: 8,
  },
  divider: {
    color: '#6E444B',
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#6E444B',
    height: 30,
  },
  inputUnderline: {
    height: 1,
    backgroundColor: '#EE6F76',
    width: '100%',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#EE6F76',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#EE6F76',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8A6A6F',
  },
  loginLink: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#6E444B',
  }
});
