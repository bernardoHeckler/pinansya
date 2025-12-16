import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #b0b0b0ff;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  color: ${(props) => props.cor};
  font-size: 25px;
`;

export const Nome = styled.Text`
  color: white;
  font-size: 20px;
`;

export const BotaoSujeito = styled.TouchableOpacity`
  background-color: #ff9090;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const BotaoText = styled.Text`
  color: #000;
  font-size: 18px;
`;
