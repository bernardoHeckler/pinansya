import React from 'react'

import { Platform, ActivityIndicator } from 'react-native'
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/auth'
import { useContext, useState } from 'react'

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp(){
    if(nome === '' || email === '' || password === '')return;

    signUp(email, password, nome);
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
            value={nome}
            onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu Email"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>
        
        <AreaInput>
          <Input
            placeholder="Sua Senha"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton 
        activeOpacity={0.8} 
        onPress={handleSignUp}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )
        }
        </SubmitButton>
      </Container>
    </Background>
  )
}

