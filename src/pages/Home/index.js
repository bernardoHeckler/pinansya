import react, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/auth";
export default function Home() {
  const { signOut, user } = useContext(AuthContext);
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Nome: {user.name}</Text>

      <Button title="Sair da Conta" onPress={() => signOut()} />
    </View>
  );
}
