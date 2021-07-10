import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
`

export const Title = styled.Text`
    color: #000;
    font-family: ${({ theme }) => theme.fontsFamily.regular};
    font-size: ${({ theme }) => theme.fontsSize.xxLarge};
    font-weight: 600;
    text-align: center;
`