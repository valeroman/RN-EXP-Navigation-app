import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                //headerShown: false,
                //animation: 'flip'
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: "Inicio"
                }}
            />

            <Stack.Screen
                name='products/index'
                options={{
                    title: "Products"
                }}
            />

            <Stack.Screen
                name='profile/index'
                options={{
                    title: "Profile"
                }}
            />

            <Stack.Screen
                name='settings/index'
                options={{
                    title: "Settings"
                }}
            />

        </Stack>
    )
}

export default StackLayout;