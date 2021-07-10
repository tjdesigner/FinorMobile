import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

const statusBarHeight = `${StatusBar.currentHeight}px`

interface PlatformProps {
    whatPlatform: string
}

export const SafeAreaMainView = styled.SafeAreaView<PlatformProps>`
    flex: 1;
    background: ${({theme}) => theme.colors.shape};
    padding: ${props => props.whatPlatform === 'android' ? statusBarHeight : 0} ${({theme}) => theme.paddings.large} ${({theme}) => theme.paddings.large};
`