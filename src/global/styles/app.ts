import { StatusBar } from 'react-native'
import styled from 'styled-components/native'


const statusBarHeight = `${StatusBar.currentHeight}px`

interface PlatformProps {
    whatPlatform: string
}

export const SafeAreaMainView = styled.SafeAreaView<PlatformProps>`
    flex: 1;
    background: ${({theme}) => theme.colors.shape};
    padding-top: ${props => props.whatPlatform === 'android' ? statusBarHeight : 0};
`