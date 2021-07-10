import React, { FC } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'

const App: FC = () => (
  <>
    <StatusBar backgroundColor='rgba(0,0,0,0.3)' translucent={true} barStyle='default' />
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}> Main </Text>
      </View>
    </SafeAreaView>
  </>
)

export default App
