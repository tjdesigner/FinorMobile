import styled from 'styled-components/native'

export const SafeAreaMainView = styled.SafeAreaView`
    flex: 1;
    background: ${({theme}) => theme.colors.shape};
`