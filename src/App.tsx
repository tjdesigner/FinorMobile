import React, { FC } from 'react'
import { StatusBar, Platform, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'
import { SafeAreaMainView } from './global/styles/app'
import Dashboard from './screens/Dashboard'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar backgroundColor='rgba(0,0,0,0)' translucent={true} barStyle='dark-content' />
    <SafeAreaMainView whatPlatform={Platform.OS}>
      <Dashboard />
    </SafeAreaMainView>
  </ThemeProvider>
)

export default App
