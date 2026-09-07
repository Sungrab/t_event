
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind/react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { login } from '../services/authService';
import { useAuth } from '../context/AuthContext';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      setUser(response.data.user);
      navigation.navigate('Home');
    } catch (error: any) {
      Alert.alert('Erreur', error?.response?.data?.message || 'Connexion échouée');
    }
  };

  return (
    <StyledView className="flex-1 justify-center items-center bg-white px-4">
      <StyledText className="text-2xl font-bold mb-6">Connexion</StyledText>
      <StyledTextInput
        className="border rounded w-full p-2 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <StyledTextInput
        className="border rounded w-full p-2 mb-4"
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <StyledTouchableOpacity className="bg-blue-500 rounded p-2 w-full mb-2" onPress={handleLogin}>
        <StyledText className="text-white text-center">Se connecter</StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity onPress={() => navigation.navigate('Register')}>
        <StyledText className="text-blue-500 text-center">Créer un compte</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

export default LoginScreen;
