import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderSection = styled.View`
  padding-top: 50px;
  padding-bottom: 30px;
  padding-horizontal: 20px;
  margin-top: -4px;
  margin-horizontal: -4px;
`;

export const UserContainer = styled.View`
  align-items: center;
  margin-bottom: 15px;
`;

export const AvatarContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #c4b9ffff;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const UserName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const WelcomeText = styled.Text`
  color: #000;
  font-size: 14px;
  margin-top: 2px;
`;

export const MenuSection = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const FooterSection = styled.View`
  border-top-width: 1px;
  border-top-color: #c4b9ffff;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-horizontal: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 12px;
`;

export const LogoutText = styled.Text`
  margin-left: 12px;
  font-size: 16px;
  color: #c62c36;
  font-weight: 500;
`;