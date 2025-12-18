import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  flex: 2;
  justify-content: center;
  padding: 14px;
  background-color: #fff;

`;

export const ButtonFilter = styled.TouchableOpacity`
  height: 45px;
  border-radius: 4px;
  background-color: #3b3dbf;
  align-items: center;
  justify-content: center;
`;

export const ButtonFilterText = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;
