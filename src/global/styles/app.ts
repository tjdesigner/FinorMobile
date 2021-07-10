import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import theme from './theme'

interface PlatformProps {
    whatPlatform: string
}

export const SafeAreaMainView = styled.SafeAreaView<PlatformProps>`
    flex: 1;
    background: ${theme.colors.shape};
    padding-top: ${props => props.whatPlatform === 'android' ? StatusBar.currentHeight: 0};
`
