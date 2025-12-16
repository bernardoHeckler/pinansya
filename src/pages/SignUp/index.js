import React from 'react'

import { Platform } from 'react-native'
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react'

export default function SignUp() {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  function handleSignUp(){
    console.log(user.nome);
  }


  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input
            placeholder="Seu Nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu Email"
          />
        </AreaInput>
        
        <AreaInput>
          <Input
            placeholder="Sua Senha"
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}  onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}

