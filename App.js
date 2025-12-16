import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.js';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="F0F4FF" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}