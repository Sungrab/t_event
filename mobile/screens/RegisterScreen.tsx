
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

  const RegisterScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
      // Appel à la fonction de register du service
    };
  
    return (
      <StyledView className="flex-1 justify-center items-center bg-white px-4">
        <StyledText className="text-2xl font-bold mb-6">Inscription</StyledText>
        <StyledTextInput
          className="border rounded w-full p-2 mb-4"
          placeholder="Nom"
          value={nom}
          onChangeText={setNom}
        />
        <StyledTextInput
          className="border rounded w-full p-2 mb-4"
          placeholder="Prénom"
          value={prenom}
          onChangeText={setPrenom}
        />
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
        <StyledTouchableOpacity className="bg-green-500 rounded p-2 w-full mb-2" onPress={handleRegister}>
          <StyledText className="text-white text-center">S'inscrire</StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={() => navigation.navigate('Login')}>
          <StyledText className="text-blue-500 text-center">Déjà un compte ? Se connecter</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    );
  };
  
  export default RegisterScreen;

