import React, { FC } from "react"
import { Platform, Text } from "react-native"

import { DefaultContainer, TranslucentStatusBarHeader } from "../../global/styles/containers"
import theme from "../../global/styles/theme"

import { UserInfo, Photo, User, UserGreeting, UserName } from './styles'

const Dashboard: FC = () => {
    return (
        <DefaultContainer background={theme.colors.shape}>
            <TranslucentStatusBarHeader background={theme.colors.primary} whatPlatform={Platform.OS}>
                <UserInfo>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/5831838?v=4.png' }} />
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Tiago</UserName>
                    </User>
                </UserInfo>
            </TranslucentStatusBarHeader>
        </DefaultContainer>
    )
}

export default Dashboard