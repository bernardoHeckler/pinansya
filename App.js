import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/index.js";
import { StatusBar } from "expo-status-bar";

import AuthProvider from "./src/contexts/auth.js";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="F0F4FF" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
