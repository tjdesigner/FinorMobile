import React, { FC } from 'react'
import { StatusBar, Platform } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'
import { SafeAreaMainView } from './global/styles/app'
import Dashboard from './screens/Dashboard'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar backgroundColor='rgba(0,0,0,0.1)' translucent={true} barStyle='default' />
    <SafeAreaMainView whatPlatform={Platform.OS}>
      <Dashboard />
    </SafeAreaMainView>
  </ThemeProvider>
)

export default App
