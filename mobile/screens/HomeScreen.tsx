import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind/react';

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen: React.FC = () => {
  return (
    <StyledView className="flex-1 justify-center items-center bg-white">
      <StyledText className="text-2xl font-bold">Bienvenue sur T-Event Mobile !</StyledText>
    </StyledView>
  );
};

export default HomeScreen;
