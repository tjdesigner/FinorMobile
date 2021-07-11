import { StatusBar } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0 ${({ theme }) => theme.paddings.large};
`

export const Photo = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 10px;
`

export const User = styled.View`
    margin-left: ${({ theme }) => theme.margins.large};
`

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fontsFamily.light};
    font-size: ${RFValue(18)}px;
`

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fontsFamily.bold};
    font-size: ${RFValue(18)}px;
`