import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { statusBaCurrentHeight } from '../../utils/constants'

interface DefaultContainerProps {
    background?: string
    padding?: string
}

export const DefaultContainer = styled.View<DefaultContainerProps>`
    flex: 1;
    background: ${props => props.background};
`

interface PlatformProps {
    whatPlatform?: string
    background?: string
}

export const TranslucentStatusBarHeader = styled.View<PlatformProps>`
    width: 100%;
    height: ${RFPercentage(40)}px;
    background: ${props => props.background};
    padding-top: ${props => props.whatPlatform === 'android' ? statusBaCurrentHeight : 0};
    align-items: center;
    justify-content: center;
`