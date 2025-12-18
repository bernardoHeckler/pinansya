import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Feather } from '@expo/vector-icons';
import {
  Container,
  HeaderSection,
  UserContainer,
  AvatarContainer,
  UserName,
  WelcomeText,
  MenuSection,
  FooterSection,
  LogoutButton,
  LogoutText
} from './styles';

export default function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderSection>
        <UserContainer>
          <AvatarContainer>
            <Feather name="user" size={35} color="#3b3dbf" />
          </AvatarContainer>
          <UserName>{user?.name || 'Usuário'}</UserName>
          <WelcomeText>Bem-vindo ao Pinansya</WelcomeText>
        </UserContainer>
      </HeaderSection>

      <MenuSection>
        <DrawerItemList {...props} />
      </MenuSection>

      <FooterSection>
        <LogoutButton onPress={() => signOut()}>
          <Feather name="log-out" size={20} color="#c62c36" />
          <LogoutText>Sair do App</LogoutText>
        </LogoutButton>
      </FooterSection>
    </DrawerContentScrollView>
  );
}