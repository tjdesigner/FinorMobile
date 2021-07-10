import React, { FC } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar backgroundColor='rgba(0,0,0,0.3)' translucent={true} barStyle='default' />
    <SafeAreaView>
      <View>
        <Text> Main </Text>
      </View>
    </SafeAreaView>
  </ThemeProvider>
)

export default App
