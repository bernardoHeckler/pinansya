import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  margin-top: 22px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding: 14px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 8px;
  color: #121212;
  font-weight: bold;
  font-size: 18px;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #fff;
`;
