import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
`

export const Title = styled.Text`
    color: #000;
    font-family: 'Nunito-Regular';
    font-size: ${({ theme }) => theme.fontsSize.xxLarge};
    text-align: center;
`