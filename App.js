import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { DataProvider } from './src/Context/DataContext';
import { ModalProvider } from './src/Context/ModalContext';
import RootNavigator from './src/Navigator/RootNavigator';
import ModalScreen from './src/Screens/Modal/ModalScreen';

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#cccccc' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#666666' }}>
        <ModalProvider>
          <DataProvider>
            <RootNavigator />
            <ModalScreen />
          </DataProvider>
        </ModalProvider>
      </SafeAreaView>
    </>
  );
}
